import { IsArray, IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

import { CreateAvailabilityRange } from './create-availability-range.dto';
import { AvailabilityRange } from '../entities/availability-range.entity';

export class CreateSportsComplexDTO {
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @Length(3, 60)
  address: string;

  @IsNotEmpty()
  @Length(3, 60)
  phone: string;

  @IsNotEmpty()
  @Length(3, 60)
  name: string;

  @Length(10, 500)
  description: string;

  @IsNotEmpty()
  images: string[];

  @IsArray()
  availability?: CreateAvailabilityRange[];

  grills?: boolean;
  locker?: boolean;
  showers?: boolean;
  bathrooms?: boolean;
  restobar?: boolean;
  parking?: boolean;
}
