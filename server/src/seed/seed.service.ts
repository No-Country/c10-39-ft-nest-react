import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Sport } from 'src/sports/entities/sport.entity';
import { SportField } from 'src/sportfields/entities/sportfield.entity';
import { User } from 'src/users/entities/user.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import { SportsComplex } from 'src/sports-complex/entities/sports-complex.entity';

import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Sport)
    private readonly sportRepository: Repository<Sport>,
    @InjectRepository(SportField)
    private readonly SportFieldRepository: Repository<SportField>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Owner)
    private readonly ownerRespository: Repository<Owner>,
    @InjectRepository(SportsComplex)
    private readonly sportcomplexRespository: Repository<SportsComplex>,
  ) { }

  async runSeed() {
    await this.deleteAll();
    await this.sportRepository
      .createQueryBuilder('sport')
      .insert()
      .values(initialData.sports)
      .execute();

    await this.SportFieldRepository
      .createQueryBuilder('sportfield')
      .insert()
      .values(initialData.sportfields)
      .execute();

    await this.userRepository
      .createQueryBuilder('user')
      .insert()
      .values(initialData.users)
      .execute();

    await this.ownerRespository
      .createQueryBuilder('owner')
      .insert()
      .values(initialData.owners)
      .execute();

    await this.sportcomplexRespository
      .createQueryBuilder('sportsComplex')
      .insert()
      .values(initialData.sportscomplex)
      .execute();

    // await this.userRepository
    //   .createQueryBuilder()
    //   .relation(User, 'owner')
    //   .of(initialData.users[0].id)
    //   .set(initialData.owners[0])

    // await this.ownerRespository
    //   .createQueryBuilder()
    //   .relation(Owner, 'sportsComplex')
    //   .of(initialData.owners[0].id)
    //   .add(initialData.sportscomplex[0].id)
  }

  async deleteAll() {
    await this.sportRepository.createQueryBuilder('sport')
      .delete()
      .where({})
      .execute();
    await this.SportFieldRepository.createQueryBuilder('sportfield')
      .delete()
      .where({})
      .execute();
    await this.sportcomplexRespository.createQueryBuilder('sportsComplex')
      .delete()
      .where({})
      .execute();
    await this.ownerRespository.createQueryBuilder('owner')
      .delete()
      .where({})
      .execute();
    await this.userRepository.createQueryBuilder('user')
      .delete()
      .where({})
      .execute();

  }
}

