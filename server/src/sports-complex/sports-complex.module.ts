import { Module } from '@nestjs/common';
import { SportsComplexService } from './sports-complex.service';
import { SportsComplexController } from './sports-complex.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Owner from 'src/owner/entities/owner.entity';
import { SportField } from 'src/sportfields/entities/sportfield.entity';
import SportsComplex from './entities/sports-complex.entity';
import { UsersService } from 'src/users/users.service';
import User from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SportField, SportsComplex, User])],
  controllers: [SportsComplexController],
  providers: [SportsComplexService, UsersService],
})
export class SportsComplexModule {}
