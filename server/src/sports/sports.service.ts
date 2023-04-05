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
  ) {}

  async findAll() {
    const sports = await this.sportRepository.find({
      relations: {
        sportfields: false,
      },
    });
    if (!sports) throw new NotFoundException('Sports not found');
    return sports.map((s) => ({ name: s.name, images: s.images }));
  }

  async findOne(name: string) {
    const sports = await this.sportRepository.find({
      where: { name: name.toLowerCase() },
      relations: {
        sportfields: true,
      },
    });
    if (!sports) throw new NotFoundException('Sport with that name not found');
    return sports.map((s) => ({
      ...s,
      sportfields: s.sportfields.map((sf) => ({
        id: sf.id,
        name: sf.name,
        images: sf.images,
      })),
    }));
  }

  async findOneByName(name: string) {
    const sport = await this.sportRepository.findOneBy({ name });
    if (!sport) throw new NotFoundException('Sport not found');

    return sport;
  }
}
