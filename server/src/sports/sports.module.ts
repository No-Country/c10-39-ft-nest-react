import { Module } from '@nestjs/common';
import { SportsService } from './sports.service';
import { SportsController } from './sports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from './entities/sport.entity';

@Module({
  controllers: [SportsController],
  providers: [SportsService],
  imports: [
    TypeOrmModule.forFeature([Sport])
  ],
  exports: [TypeOrmModule]
})
export class SportsModule {}
