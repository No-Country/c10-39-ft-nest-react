import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SportsService } from 'src/sports/sports.service';
import { Repository } from 'typeorm';

import { CreateSportFieldDto, UpdateSportFieldDto } from './dto';
import { SportField } from './entities/sportfield.entity';
import { UserDTO } from 'src/Core/auth/dto';
import SportsComplex from 'src/sports-complex/entities/sports-complex.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SportfieldsService {
  constructor(
    @InjectRepository(SportField)
    private readonly sportFieldRepository: Repository<SportField>,
    private readonly sportService: SportsService,
    @InjectRepository(SportsComplex)
    private readonly sportsComplexRepository: Repository<SportsComplex>,
  ) {}

  async findAll() {
    const allSportfields = await this.sportFieldRepository.find({
      relations: {
        sport: true,
      },
    });
    if (!allSportfields) throw new NotFoundException('SportField not found');
    return allSportfields.map((sf) => ({
      ...sf,
      sport: sf.sport?.name,
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

  async findOne(id: string) {
    const sportfield = await this.sportFieldRepository.findOneBy({ id });
    if (!sportfield) throw new NotFoundException('SportField not found');
    return sportfield;
  }

  // TODO: Implement CREATE UPDATE AND DELETE
  async create(createSportFieldDto: CreateSportFieldDto, user: UserDTO) {
    const { sport: sportName, ...sportFieldAttrs } = createSportFieldDto;

    const ownerId = user.owner.id;

    console.log(ownerId);
    

    const sportsComplex = await this.sportsComplexRepository.findOneBy({
      owner: { id: ownerId },
    });

    const newSportField = this.sportFieldRepository.create({
      ...sportFieldAttrs,
    });
    newSportField.sportsComplex = sportsComplex;
    await this.bindSport(newSportField, sportName);

    await this.sportFieldRepository.save(newSportField);

    return { ...newSportField, sport: sportName };
  }

  async update(id: string, updateSportFieldDto: UpdateSportFieldDto) {
    const { sport: sportName, ...updatedAttrs } = updateSportFieldDto;

    const updatedSportField = await this.sportFieldRepository.preload({
      id,
      ...updatedAttrs,
    });

    if (!updatedSportField) throw new NotFoundException('SportField not found');

    if (sportName) {
      await this.bindSport(updatedSportField, sportName);
    }

    // TODO: this is not the most performant way of update
    await this.sportFieldRepository.save(updatedSportField);

    return { ...updatedSportField, sport: sportName };
  }

  async remove(id: string) {
    const sportfield = await this.sportFieldRepository.findOneBy({ id });

    if (!sportfield) throw new NotFoundException('SportField not found');

    await this.sportFieldRepository.remove(sportfield);

    return sportfield;
  }

  async search(lat: number, lng: number): Promise<SportField[]> {
    const R = 6371; // Radio de la Tierra en kilómetros
    const limit = 20; // Límite de resultados

    const nearbySportFields = await this.sportFieldRepository
      .createQueryBuilder('sportField')
      .select([
        'sportField.id',
        'sportField.name',
        'sportField.description',
        'sportField.dimensions',
        'sportField.images',
        'sportField.sportId',
        'sportsComplex.id',
        'sportsComplex.name',
        'sportsComplex.email',
        'sportsComplex.address',
        'sportsComplex.phone',
        'sportsComplex.description',
        'sportsComplex.lat',
        'sportsComplex.lng',
        'sportsComplex.image',
        `(${R} * acos(cos(radians(:lat)) * cos(radians(:lat)) * cos(radians(:lng) - radians(:lng)) + sin(radians(:lat)) * sin(radians(:lat)))) as distancia`,
      ])
      .leftJoin('sportField.sportsComplex', 'sportsComplex')
      .orderBy('distancia', 'ASC')
      .setParameter('lat', lat)
      .setParameter('lng', lng)
      .limit(limit)
      .getMany();

    const sportFields = plainToClass(SportField, nearbySportFields);
    return sportFields;
  }

  

  private async bindSport(sportField: SportField, sportName: string) {
    try {
      const { id: sportId } = await this.sportService.findOneByName(sportName, {
        id: true,
      });

      const queryBuilder = this.sportFieldRepository.createQueryBuilder();
      await queryBuilder.relation(SportField, 'sport').of(sportField).set(sportId);

      return sportField;
    } catch (e: any) {
      if (e.constructor === NotFoundException)
        throw new BadRequestException("Sport doesn't exists");
    }
  }
}
