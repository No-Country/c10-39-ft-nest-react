import { Module } from '@nestjs/common';
import { SportsComplexService } from './sports-complex.service';
import { SportsComplexController } from './sports-complex.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Owner from 'src/owner/entities/owner.entity';
import { Sportfields } from 'src/sportfields/entities/sportfield.entity';
import SportsComplex from './entities/sports-complex.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Owner, Sportfields, SportsComplex])
  ],
  controllers: [SportsComplexController],
  providers: [SportsComplexService]
})
export class SportsComplexModule {}
