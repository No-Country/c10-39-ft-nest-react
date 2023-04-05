import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
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
  async create(@Body() createSportFieldDto: CreateSportFieldDto) {
    return this.sportfieldsService.create(createSportFieldDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.sportfieldsService.remove(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSportFieldDto: UpdateSportFieldDto,
  ) {
    return this.sportfieldsService.update(id, updateSportFieldDto);
  }
}
