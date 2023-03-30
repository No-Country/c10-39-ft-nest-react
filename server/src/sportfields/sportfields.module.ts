import { Module } from '@nestjs/common';
import { SportfieldsService } from './sportfields.service';
import { SportfieldsController } from './sportfields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sportfields } from './entities/sportfield.entity';

@Module({
  controllers: [SportfieldsController],
  providers: [SportfieldsService],
  imports: [
    TypeOrmModule.forFeature([Sportfields])
  ],
  exports: [TypeOrmModule]
})
export class SportfieldsModule {}
