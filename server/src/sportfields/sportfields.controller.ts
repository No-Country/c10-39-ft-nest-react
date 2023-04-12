import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  Query,
  ParseFloatPipe,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/Core/auth/decorators';
import { AuthUserDTO } from 'src/Core/auth/dto';
import { RoleGuard } from 'src/Core/auth/guards';

import { CreateSportFieldDto, UpdateSportFieldDto } from './dto';
import { SportfieldsService } from './sportfields.service';

@ApiTags('SportFields Endpoints')
@Controller('sportfields')
export class SportfieldsController {
  constructor(private readonly sportfieldsService: SportfieldsService) {}

  @Get()
  findAll(@GetUser() user: AuthUserDTO) {
    return this.sportfieldsService.findAll(user);
  }

  @Get('sport/:sport')
  findWithSport(@Param('sport') sport: string) {
    return this.sportfieldsService.findWithSport(sport);
  }

  @Get('search')
  async search(
    @Query('lat', ParseFloatPipe) lat: number,
    @Query('lng', ParseFloatPipe) lng: number,
    @Query('rHour', ParseIntPipe) rHour: number,
    @Query('date') date: string,
    @Query('sport') sport: string,
  ) {
    return await this.sportfieldsService.search(lat, lng, rHour, date, sport);
  }

  @Get('user/reservations')
  async findUserReservations(@GetUser() user: AuthUserDTO) {
    return this.sportfieldsService.findUserReservations(user);
  }

  @Get(':id/availability')
  getAvailability(@Param('id', ParseUUIDPipe) id: string) {
    return this.sportfieldsService.getAvailability(id);
  }

  @Get(':id/reservations')
  getReservations(@Param('id', ParseUUIDPipe) id: string) {
    return this.sportfieldsService.getReservations(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.sportfieldsService.findOne(id);
  }

  @Post()
  @UseGuards(RoleGuard)
  async create(@Body() createSportFieldDto: CreateSportFieldDto, @GetUser() user: AuthUserDTO) {
    return this.sportfieldsService.create(createSportFieldDto, user.ownerId);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  async remove(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: AuthUserDTO) {
    return this.sportfieldsService.remove(id, user.ownerId);
  }

  @Patch(':id')
  @UseGuards(RoleGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSportFieldDto: UpdateSportFieldDto,
    @GetUser() user: AuthUserDTO,
  ) {
    return this.sportfieldsService.update(id, updateSportFieldDto, user.ownerId);
  }
}
