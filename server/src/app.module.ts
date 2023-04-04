import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import User from './users/entities/user.entity';
import { AuthModule } from './Core/auth/auth.module';
import { SportsModule } from './sports/sports.module';
import { SportfieldsModule } from './sportfields/sportfields.module';
import { Sport } from './sports/entities/sport.entity';
import { Sportfields } from './sportfields/entities/sportfield.entity';
import { SeedModule } from './seed/seed.module';
import { SportsComplexModule } from './sports-complex/sports-complex.module';
import { OwnerModule } from './owner/owner.module';
import { ReservationModule } from './reservation/reservation.module';
import Owner from './owner/entities/owner.entity';
import SportsComplex from './sports-complex/entities/sports-complex.entity';
import { Reservation } from './reservation/entities/reservation.entity';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Sport, Sportfields, Owner, SportsComplex, Reservation],
        // autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, Sport, Sportfields, Owner, SportsComplex, Reservation]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // ConfigModule.forRoot(),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST,
    //   port: +process.env.DB_PORT,
    //   database: process.env.DB_NAME,
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),

    UsersModule,
    AuthModule,
    SportsModule,
    SportfieldsModule,
    SeedModule,
    SportsComplexModule,
    OwnerModule,
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
