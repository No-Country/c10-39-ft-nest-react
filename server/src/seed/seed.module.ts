import { Module } from '@nestjs/common';
import { OwnerModule } from 'src/owner/owner.module';
import { SportfieldsModule } from 'src/sportfields/sportfields.module';
import { SportsModule } from 'src/sports/sports.module';
import { SportsComplexModule } from 'src/sports-complex/sports-complex.module';
import { UsersModule } from 'src/users/users.module';

import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [SportsModule, SportfieldsModule, UsersModule, SportsComplexModule, OwnerModule],
})
export class SeedModule {}
