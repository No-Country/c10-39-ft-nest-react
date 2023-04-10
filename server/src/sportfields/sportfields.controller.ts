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
} from '@nestjs/common';
import { GetUser } from 'src/Core/auth/decorators';
import { AuthUserDTO } from 'src/Core/auth/dto';
import { RoleGuard } from 'src/Core/auth/guards';

import { CreateSportFieldDto, UpdateSportFieldDto } from './dto';
import { SportfieldsService } from './sportfields.service';

@Controller('sportfields')
export class SportfieldsController {
  constructor(private readonly sportfieldsService: SportfieldsService) {}

  @Get()
  findAll() {
    return this.sportfieldsService.findAll();
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
