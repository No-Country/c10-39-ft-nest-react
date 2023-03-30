import { PartialType } from '@nestjs/mapped-types';
import { CreateSportsComplexDto } from './create-sports-complex.dto';

export class UpdateSportsComplexDto extends PartialType(CreateSportsComplexDto) {}
