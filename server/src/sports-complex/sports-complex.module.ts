import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { SportsComplexService } from './sports-complex.service';
import { SportsComplexController } from './sports-complex.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sportfields } from 'src/sportfields/entities/sportfield.entity';
import SportsComplex from './entities/sports-complex.entity';
import { UsersService } from 'src/users/users.service';
import User from 'src/users/entities/user.entity';
import Owner from './entities/owner.entity';
import { AuthMiddleware } from 'src/Core/Middleware/auth-token.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Owner, Sportfields, SportsComplex, User]),
  ],
  controllers: [SportsComplexController],
  providers: [SportsComplexService, UsersService]
})
export class SportsComplexModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'sports-complex', method: RequestMethod.POST },
      );
  }

}
