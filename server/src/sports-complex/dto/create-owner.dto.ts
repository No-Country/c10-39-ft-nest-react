import {  IsString, MaxLength, MinLength } from "class-validator";
import User from "src/users/entities/user.entity";

export class CreateOwnerDTO {
  @IsString()
  @MinLength(5)
  @MaxLength(12)
  DNI: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;
  user:User
}