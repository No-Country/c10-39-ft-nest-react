import { Module } from '@nestjs/common';
import { SportfieldsService } from './sportfields.service';
import { SportfieldsController } from './sportfields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportField } from './entities/sportfield.entity';
import SportsComplex from 'src/sports-complex/entities/sports-complex.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Module({
  controllers: [SportfieldsController],
  providers: [SportfieldsService],
  imports: [
    TypeOrmModule.forFeature([SportField, SportsComplex, Reservation])
  ],
  exports: [TypeOrmModule]
})
export class SportfieldsModule {}
