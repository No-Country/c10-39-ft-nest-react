import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SportsComplexService } from './sports-complex.service';
import { CreateSportsComplexDTO } from './dto/create-sports-complex.dto';
import { UpdateSportsComplexDTO } from './dto/update-sports-complex.dto';

@Controller('sports-complex')
export class SportsComplexController {
  constructor(private readonly sportsComplexService: SportsComplexService) {}

  @Post()
  create(@Body() createSportsComplexDto: CreateSportsComplexDTO) {
    return this.sportsComplexService.create(createSportsComplexDto);
  }

  @Get()
  findAll() {
    return this.sportsComplexService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportsComplexService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSportsComplexDTO: UpdateSportsComplexDTO) {
    return this.sportsComplexService.update(+id, updateSportsComplexDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportsComplexService.remove(+id);
  }
}

