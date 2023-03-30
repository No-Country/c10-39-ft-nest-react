import { Module } from '@nestjs/common';
import { SportsComplexService } from './sports-complex.service';
import { SportsComplexController } from './sports-complex.controller';

@Module({
  controllers: [SportsComplexController],
  providers: [SportsComplexService]
})
export class SportsComplexModule {}
