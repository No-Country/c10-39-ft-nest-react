import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthMiddleware } from 'src/Core/Middleware/auth-token.middleware';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import Owner from 'src/sports-complex/entities/owner.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User,Owner, Reservation])
  ],
  exports: [TypeOrmModule]
})
export class UsersModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'users/auth', method: RequestMethod.GET },
      );
  }
}
