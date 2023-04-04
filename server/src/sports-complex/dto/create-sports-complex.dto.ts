import { IsEmail, IsNotEmpty, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class CreateSportsComplexDTO {
  /* ------------------  owner ------------*/

  @IsString()
  @MinLength(5)
  @MaxLength(12)
  DNI: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;


  /* ------------------  complex ------------*/
  @IsEmail()
  email?: string;
  
  @IsNotEmpty()
  @Length(3, 60)
  name: string;

  @Length(10, 500)
  description: string;

  @IsNotEmpty()
  image: string[];

  grills?: boolean;
  locker?: boolean;
  showers?: boolean;
  bathrooms?: boolean;
  restobar?: boolean;
  parking?: boolean;
}
