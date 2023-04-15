import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import SportField from 'src/sportfields/entities/sportfield.entity';
import { SportfieldsService } from 'src/sportfields/sportfields.service';
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

  async create(createReservationDto: CreateReservationDto) {
    const { hour, date, sportfieldId, userEmail } = createReservationDto;
    const sportfield = await this.sportFieldRepository.findOne({
      where: { id: sportfieldId },
    });

    if (!sportfield) {
      throw new NotFoundException('Sportfield not found');
    }

    const user = await this.userRepository.findOne({
      where: { email: userEmail },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // TODO: Check if reservation is within availability of sportfield
    if (!this.turnIsAvailable(hour, date, sportfieldId)) {
      throw new BadRequestException('Turn is already taken');
    }
    const reservation = this.reservationRepository.create({
      ...createReservationDto,
      sportfield,
      user,
    });

    return await this.reservationRepository.save(reservation);
  }

  async findAll(user: AuthUserDTO) {
    const reservations = await this.sportFieldRepository
      .createQueryBuilder('sf')
      .innerJoinAndSelect('sf.reservation', 'res', 'res.userId = :userId', { userId: user.id })
      .leftJoin('sf.sportsComplex', 'sc')
      .addSelect('sc.address')
      .getMany();

    return reservations;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  async update(id: string, updateReservationDto: UpdateReservationDto, user: AuthUserDTO) {
    const reservation = await this.reservationRepository.findOneBy({ id });

    if (!reservation) throw new NotFoundException('Reservation not found');

    const updatedReservation = this.reservationRepository.merge(reservation, updateReservationDto);

    return await this.reservationRepository.save(updatedReservation);
  }

  async remove(id: string, user: AuthUserDTO) {
    const reservation = await this.reservationRepository.findOne({
      select: {
        id: true,
        user: {
          id: true,
        },
        sportfield: {
          id: true,
          sportsComplex: {
            id: true,
            owner: {
              id: true,
            },
          },
        },
      },
      where: {
        id,
      },
      relations: {
        user: true,
        sportfield: {
          sportsComplex: {
            owner: true,
          },
        },
      },
    });

    if (
      reservation.sportfield.sportsComplex.owner.id !== user.ownerId &&
      reservation.user.id !== user.id
    )
      throw new ForbiddenException('Permission denied');

    return await this.reservationRepository.remove(reservation);
  }

  private async turnIsAvailable(hour: number, date: Date, sportfieldId: string) {
    // TODO: Add check for availability
    return (
      (await this.reservationRepository
        .createQueryBuilder('res')
        .where('hour = :hour AND date = :date AND sportfieldId = :sportfieldId', {
          hour,
          date,
          sportfieldId,
        })
        .getCount()) === 0
    );
  }
}
