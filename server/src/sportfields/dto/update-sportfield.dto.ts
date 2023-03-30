import { PartialType } from '@nestjs/mapped-types';
import { CreateSportfieldDto } from './create-sportfield.dto';

export class UpdateSportfieldDto extends PartialType(CreateSportfieldDto) {}
