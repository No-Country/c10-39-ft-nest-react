import { Injectable } from '@nestjs/common';

import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import SportField from 'src/sportfields/entities/sportfield.entity';
import { SportfieldsService } from 'src/sportfields/sportfields.service';
import { NotFoundError } from 'rxjs';
import User from 'src/users/entities/user.entity';
import { AuthUserDTO } from 'src/Core/auth/dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    @InjectRepository(SportField)
    private readonly sportFieldRepository: Repository<SportField>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // private readonly sportfieldService: SportfieldsService, // private readonly userService: UsersService,
  ) {}

  async create(createReservationDto: CreateReservationDto, userId: string) {
    const sportfield = await this.sportFieldRepository.findOne({
      where: { id: createReservationDto.sportfieldId },
    });
    if (!sportfield) {
      throw new NotFoundError('Sportfield not found');
    }

    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundError('User not found');
    }
    const reservation = this.reservationRepository.create({
      ...createReservationDto,
      sportfield,
      user,
    });
    return await this.reservationRepository.save(reservation);
  }

  findAll() {
    return `This action returns all reservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
