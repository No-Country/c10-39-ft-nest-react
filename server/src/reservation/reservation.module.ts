import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import User from 'src/users/entities/user.entity';
import { Sportfields } from 'src/sportfields/entities/sportfield.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reservation, Sportfields, User])
  ],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
