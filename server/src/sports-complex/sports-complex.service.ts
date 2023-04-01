import { Injectable } from '@nestjs/common';
import { CreateSportsComplexDTO } from './dto/create-sports-complex.dto';
import { UpdateSportsComplexDTO } from './dto/update-sports-complex.dto';

@Injectable()
export class SportsComplexService {
  create(createSportsComplexDTO: CreateSportsComplexDTO) {
    return 'This action adds a new sportsComplex';
  }

  findAll() {
    return `This action returns all sportsComplex`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportsComplex`;
  }

  update(id: number, updateSportsComplexDTO: UpdateSportsComplexDTO) {
    return `This action updates a #${id} sportsComplex`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportsComplex`;
  }
}
