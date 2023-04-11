import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SportsService } from 'src/sports/sports.service';
import { SportsComplexService } from 'src/sports-complex/sports-complex.service';
import { Repository } from 'typeorm';

import { CreateSportFieldDto, UpdateSportFieldDto } from './dto';
import { SportField } from './entities/sportfield.entity';

@Injectable()
export class SportfieldsService {
  constructor(
    @InjectRepository(SportField)
    private readonly sportFieldRepository: Repository<SportField>,
    private readonly sportService: SportsService,
    private readonly sportsComplexService: SportsComplexService,
  ) {}

  async findAll() {
    const allSportfields = await this.sportFieldRepository.find({
      relations: {
        sport: true,
      },
    });
    if (!allSportfields) throw new NotFoundException('SportField not found');
    // TODO: Refactor this to use an interceptor
    return allSportfields.map(({ sportsComplex, sport, ...field }) => ({
      ...field,
      sportsComplex: {
        name: sportsComplex?.name,
        sportsComplexId: sportsComplex?.id,
      },
      availability: sportsComplex?.availability,
      sport: sport.name,
    }));
  }

  async findWithSport(sport: string) {
    const allSportfields = await this.sportFieldRepository.find({
      where: {
        sport: {
          name: sport,
        },
      },
      relations: {
        sport: true,
      },
    });
    if (!allSportfields.length) throw new NotFoundException('SportField not found');
    return allSportfields.map((sf) => ({
      ...sf,
      sport: sf.sport.name,
    }));
  }

  async getAvailability(id: string) {
    const sportField = await this.sportFieldRepository.findOneBy({ id });

    return sportField.availability;
  }

  async findOne(id: string) {
    const sportfield = await this.sportFieldRepository.findOneBy({ id });
    if (!sportfield) throw new NotFoundException('SportField not found');
    return sportfield;
  }

  // TODO: Implement CREATE UPDATE AND DELETE
  async create(createSportFieldDto: CreateSportFieldDto, ownerId: string) {
    const { sport: sportName, sportsComplexId, ...sportFieldAttrs } = createSportFieldDto;

    const newSportField = this.sportFieldRepository.create({
      ...sportFieldAttrs,
    });

    newSportField.sport = await this.getSport(sportName);

    const sportsComplex = await this.sportsComplexService.findOneWithOwner(sportsComplexId);

    if (sportsComplex.owner.id !== ownerId) throw new ForbiddenException('Insuficient Permissions');

    newSportField.sportsComplex = sportsComplex;

    await this.sportFieldRepository.save(newSportField);

    return { ...newSportField, sport: sportName };
  }

  async update(id: string, updateSportFieldDto: UpdateSportFieldDto, ownerId: string) {
    await this.checkOwner(ownerId, id);

    const { sport: sportName, ...updatedAttrs } = updateSportFieldDto;

    const updatedSportField = await this.sportFieldRepository.preload({
      id,
      ...updatedAttrs,
    });

    if (!updatedSportField) throw new NotFoundException('SportField not found');

    if (sportName) {
      updatedSportField.sport = await this.getSport(sportName);
    }

    // TODO: this is not the most performant way to update
    await this.sportFieldRepository.save(updatedSportField);

    return { ...updatedSportField, sport: sportName };
  }

  async remove(id: string, ownerId: string) {
    await this.checkOwner(ownerId, id);
    const sportfield = await this.sportFieldRepository.findOneBy({ id });

    if (!sportfield) throw new NotFoundException('SportField not found');

    await this.sportFieldRepository.remove(sportfield);

    return sportfield;
  }

  private async checkOwner(ownerId: string, sportFieldId: string) {
    const realOwner = await this.sportFieldRepository
      .createQueryBuilder('sportfields')
      .select('owner.*')
      .where('sportfields.id = :sportFieldId', { sportFieldId })
      .innerJoin('sportfields.sportsComplex', 'sportsComplex')
      .innerJoin('sportsComplex.owner', 'owner')
      .getRawOne();

    if (!realOwner) throw new NotFoundException("Sport field doesn't exists");

    if (realOwner.id !== ownerId) throw new ForbiddenException('Insuficient premissions');

    return realOwner.id;
  }

  private async getSport(sportName: string) {
    try {
      const sport = await this.sportService.findOneByName(sportName);

      return sport;
    } catch (e: any) {
      if (e.constructor === NotFoundException)
        throw new BadRequestException("Sport doesn't exists");
    }
  }
}
