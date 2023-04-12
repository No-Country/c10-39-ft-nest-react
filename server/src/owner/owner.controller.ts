import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerService } from './owner.service';

@ApiTags('Owner Enpoints')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  // TODO: Should use the user from auth
  @Post()
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  findAll() {
    return this.ownerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ownerService.findOne(id);
  }

  @Patch(':userId')
  update(@Param('userId', ParseUUIDPipe) userId: string, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownerService.update(userId, updateOwnerDto);
  }
}
