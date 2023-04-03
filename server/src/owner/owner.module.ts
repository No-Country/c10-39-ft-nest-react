import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import SportsComplex from 'src/sports-complex/entities/sports-complex.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/users/entities/user.entity';
import Owner from './entities/owner.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SportsComplex,User, Owner])
  ],
  controllers: [OwnerController],
  providers: [OwnerService]
})
export class OwnerModule {}
