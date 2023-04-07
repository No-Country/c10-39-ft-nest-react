import { Transform } from 'class-transformer';
import { IsNotEmpty, IsDate, Validate } from 'class-validator';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'notPastDate', async: false })
export class NotPastDateConstraint implements ValidatorConstraintInterface {
  validate(date: Date) {
    const now = new Date();
    return date.getTime() >= now.getTime();
  }

  defaultMessage() {
    return 'Date cannot be in the past';
  }
}

@ValidatorConstraint({ name: 'notPastHour', async: false })
export class NotPastHourConstraint implements ValidatorConstraintInterface {
  validate(hour: number) {
    const now = new Date();
    return hour >= now.getHours();
  }
}

export class CreateReservationDto {
  @IsNotEmpty()
  sportfieldId: string;

  @IsNotEmpty()
  @Validate(NotPastHourConstraint)
  hour: number;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty()
  @Validate(NotPastDateConstraint)
  date: Date;
}

