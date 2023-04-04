import { Injectable, NotFoundException } from '@nestjs/common';
// TODO: Use dtos to implement crud
// import { CreateSportfieldDto } from './dto/create-sportfield.dto';
// import { UpdateSportfieldDto } from './dto/update-sportfield.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SportField } from './entities/sportfield.entity';
import { Repository } from 'typeorm';
import { CreateSportFieldDto, UpdateSportFieldDto } from './dto';
import { SportsService } from 'src/sports/sports.service';

@Injectable()
export class SportfieldsService {
  constructor(
    @InjectRepository(SportField)
    private readonly sportFieldRepository: Repository<SportField>,
    private readonly sportService: SportsService
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
      sport: sf.sport.name,
    }));
  }

  async findOne(id: string) {
    const sportfield = await this.sportFieldRepository.findOneBy({ id });
    if (!sportfield) throw new NotFoundException('SportField not found');
    return sportfield;
  }

  // TODO: Implement CREATE UPDATE AND DELETE
  async create(createSportFieldDto: CreateSportFieldDto) {
    const { sport: sportName, ...sportFieldAttrs } = createSportFieldDto;
    const sport = await this.sportService.findOneByName(sportName);

    const newSportField = this.sportFieldRepository.create({
      ...sportFieldAttrs,
      sport,
    });

    await this.sportFieldRepository.save(newSportField);

    return { ...newSportField, sport: newSportField.sport.name };
  }

  async update(id: string, updateSportFieldDto: UpdateSportFieldDto) {
    const { sport: sportName, ...updatedAttrs } = updateSportFieldDto;

    const updatedSportField = await this.sportFieldRepository.preload({
      id,
      ...updatedAttrs,
    });

    if (!updatedSportField) throw new NotFoundException('SportField not found');

    // TODO: If sport doesn't exists it should return a diferent exception
    const sport = await this.sportService.findOneByName(sportName);

    // if sport doesn't exist findOneByName throw an Exception
    updatedSportField.sport = sport;

    await this.sportFieldRepository.save(updatedSportField);

    return { ...updatedSportField, sport: updatedSportField.sport.name };
  }

  async remove(id: string) {
    const sportfield = await this.sportFieldRepository.findOneBy({ id });

    if (!sportfield) throw new NotFoundException('SportField not found');

    await this.sportFieldRepository.remove(sportfield);

    return sportfield;
  }
}
