import { Injectable } from '@nestjs/common';

import { initialData } from './data';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import Owner from 'src/owner/entities/owner.entity';
import { SALT } from 'src/Core/Constants';
import * as bcrypt from 'bcrypt';
import SportsComplex from 'src/sports-complex/entities/sports-complex.entity';
import { Sport } from 'src/sports/entities/sport.entity';
import { SportField } from 'src/sportfields/entities/sportfield.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
    @InjectRepository(SportsComplex)
    private readonly sportsComplexRepository: Repository<SportsComplex>,
    @InjectRepository(Sport)
    private readonly sportRepository: Repository<Sport>,
    @InjectRepository(SportField)
    private readonly sportfieldsRepository: Repository<SportField>,
  ) {}

  async runSeed() {
    await this.deleteAll();
    // create users
    const hashPassword = (password: string) => {
      return bcrypt.hashSync(password, SALT);
    };
    const { users, sportsComplex, sports, sportFields } = initialData;
    const usersInserts = [];
    users.noOwners.forEach((user) => {
      const userDB = this.userRepository.create({ ...user, password: hashPassword(user.password) });

      usersInserts.push(this.userRepository.save(userDB));
    });
    await Promise.all(usersInserts);

    const ownersDB = [];
    for (const owner of users.owners) {
      const { ownerFields, ...userFields } = owner;
      const user = this.userRepository.create({
        ...userFields,
        password: hashPassword(userFields.password),
      });

      const userDB = await this.userRepository.save(user);

      const ownerI = this.ownerRepository.create({ user: userDB, ...ownerFields });

      const ownerDB = await this.ownerRepository.save(ownerI);

      userDB.owner = ownerDB;

      await this.userRepository.update(userDB.id, { owner: ownerDB });

      ownersDB.push(ownerDB);
    }

    // add SportsComplexs
    const sportsComplexsDB = [];
    for (const sc of sportsComplex) {
      const scI = this.sportsComplexRepository.create({
        ...sc,
        owner: ownersDB[0],
      });

      const sportsComplexDB: SportsComplex = await this.sportsComplexRepository.save(scI);
      sportsComplexsDB.push(sportsComplexDB);
    }

    // create sports
    const sportsDB: Sport[] = [];
    for (const sportData of sports) {
      const sport = this.sportRepository.create({ ...sportData });

      const sportDB = await this.sportRepository.save(sport);
      sportsDB.push(sportDB);
    }

    // create fields
    for (const field of sportFields) {
      const sport = sportsDB.find((sportDB: Sport) => sportDB.name === field.sport);
      if (!sport) continue;

      const sportfield = this.sportfieldsRepository.create({
        ...field,
        sport,
        sportsComplex: sportsComplexsDB[0],
      });

      await this.sportfieldsRepository.save(sportfield);
    }

    // await this.sportRepository
    //   .createQueryBuilder('sport')
    //   .insert()
    //   .values(initialData.sports)
    //   .execute();
    //
    // await this.sportfieldsRepository
    //   .createQueryBuilder('sportfield')
    //   .insert()
    //   .values(initialData.sportfields)
    //   .execute();
  }

  async deleteAll() {
    await this.userRepository.createQueryBuilder().delete().where({}).execute();
    await this.ownerRepository.createQueryBuilder().delete().where({}).execute();
    await this.sportsComplexRepository.createQueryBuilder().delete().where({}).execute();
    await this.sportRepository.createQueryBuilder().delete().where({}).execute();
    await this.sportfieldsRepository.createQueryBuilder().delete().where({}).execute();
    // await this.sportRepository.createQueryBuilder('sport').delete().where({}).execute();
    // await this.sportfieldsRepository.createQueryBuilder('sportfield').delete().where({}).execute();
  }
}
