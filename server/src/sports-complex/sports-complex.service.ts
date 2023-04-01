import { Injectable } from '@nestjs/common';
import { CreateSportsComplexDto } from './dto/create-sports-complex.dto';
import { UpdateSportsComplexDto } from './dto/update-sports-complex.dto';

@Injectable()
export class SportsComplexService {
  create(createSportsComplexDto: CreateSportsComplexDto) {
    return 'This action adds a new sportsComplex';
  }

  findAll() {
    return `This action returns all sportsComplex`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportsComplex`;
  }

  update(id: number, updateSportsComplexDto: UpdateSportsComplexDto) {
    return `This action updates a #${id} sportsComplex`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportsComplex`;
  }
}
