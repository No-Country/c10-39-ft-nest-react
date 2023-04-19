import { type IReservation } from './Reservation.type';

export interface ISportField {
  id: string;
  name: string;
  description: string;
  images: string[];
  sport: string;
  reservation: IReservation[];
}
