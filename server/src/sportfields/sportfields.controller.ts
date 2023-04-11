import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  Query,
  ParseIntPipe,
  ParseFloatPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetUser } from 'src/Core/auth/decorators';
import { UserDTO } from 'src/Core/auth/dto';
import { OwnerRoleGuard } from 'src/Core/auth/guards';

import { CreateSportFieldDto, UpdateSportFieldDto } from './dto';
import { SportfieldsService } from './sportfields.service';

@ApiTags('SportFields Endpoints')
@Controller('sportfields')
export class SportfieldsController {
  constructor(private readonly sportfieldsService: SportfieldsService) { }

  @Get()
  findAll(
    @GetUser() user: UserDTO
  ) {
    console.log(user);
    return this.sportfieldsService.findAll();
  }

  @Get('sport/:sport')
  findWithSport(
    @Param('sport') sport: string,
  ) {
    console.log(sport);

    return this.sportfieldsService.findWithSport(sport);
  }

  @Get('id/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.sportfieldsService.findOne(id);
  }

  @Get('search')
  async search(
    @Query('lat', ParseFloatPipe) lat: number,
    @Query('lng', ParseFloatPipe) lng: number,
  ) {
    return await this.sportfieldsService.search(lat, lng);
  }

  @Post()
  @UseGuards(OwnerRoleGuard)
  async create(@Body() createSportFieldDto: CreateSportFieldDto, @GetUser() user: UserDTO) {
    return this.sportfieldsService.create(createSportFieldDto, user);
  }

  @Delete(':id')
  @UseGuards(OwnerRoleGuard)
  async remove(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: UserDTO) {
    return this.sportfieldsService.remove(id);
  }

  @Patch(':id')
  @UseGuards(OwnerRoleGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSportFieldDto: UpdateSportFieldDto,
    @GetUser() user: UserDTO,
  ) {
    return this.sportfieldsService.update(id, updateSportFieldDto);
  }
}
