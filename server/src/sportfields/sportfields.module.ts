import { Module } from '@nestjs/common';
import { SportfieldsService } from './sportfields.service';
import { SportfieldsController } from './sportfields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sportfields } from './entities/sportfield.entity';
import SportsComplex from 'src/sports-complex/entities/sports-complex.entity';

@Module({
  controllers: [SportfieldsController],
  providers: [SportfieldsService],
  imports: [
    TypeOrmModule.forFeature([Sportfields, SportsComplex])
  ],
  exports: [TypeOrmModule]
})
export class SportfieldsModule {}
