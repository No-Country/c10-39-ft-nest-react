import { Injectable, NotFoundException } from '@nestjs/common';
// TODO: Use dtos to implement crud
// import { CreateSportfieldDto } from './dto/create-sportfield.dto';
// import { UpdateSportfieldDto } from './dto/update-sportfield.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sportfields } from './entities/sportfield.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportfieldsService {
  constructor(
    @InjectRepository(Sportfields)
    private readonly sportfieldsRepository: Repository<Sportfields>
  ) { }

  async findAll() {
    const allSportfields = await this.sportfieldsRepository.find({
      relations: {
        sport: true
      }
    });
    if (!allSportfields) throw new NotFoundException('Sportfields not found')
    return allSportfields.map(sf => ({
      ...sf,
      sport: sf.sport.name
    }));
  }

  async findOne(id: string) {
    const sportfield = await this.sportfieldsRepository.findOneBy({ id });
    if (!sportfield) throw new NotFoundException('Sportfield not found')
    return sportfield;
  }

  // TODO: Implement CREATE UPDATE AND DELETE
}
