import { IReservation } from './Reservation.type';

export interface ISportField {
  id: string;
  name: string;
  description: string;
  images: string[];
  sport: string;
  reservation: IReservation[];
}

export interface ISportFieldRespones extends ISportField {
  capacity: number;
  dimensions?: string;
  fieldType: string;
  sportsComplex: ISportComplex
}

interface ISportComplex {
  address: string;
  email: string;
  id: string;
  iamges: string[];
  lat: number;
  lng: number;
  phone: string;
}