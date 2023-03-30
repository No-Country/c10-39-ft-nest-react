import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from './entities/sport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(Sport)
    private readonly sportRepository: Repository<Sport>
  ) { }

  async findAll() {
    const sports = await this.sportRepository.find({
      select: { name: true },
      relations: {
        sportfields: false
      }

    });
    if (!sports) throw new NotFoundException('Sports not found');
    return sports.map(s => s.name);
  }

  async findOne(name: string) {
    const sports = await this.sportRepository.find({
      where: { name: name.toLowerCase() },
      relations: {
        sportfields: true
      }
    })
    if (!sports) throw new NotFoundException('Sport with that name not found');
    return sports;
  }

}
