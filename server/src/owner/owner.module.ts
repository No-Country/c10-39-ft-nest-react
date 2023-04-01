import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import SportsComplex from 'src/sports-complex/entities/sports-complex.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([SportsComplex])
  ],
  controllers: [OwnerController],
  providers: [OwnerService]
})
export class OwnerModule {}
