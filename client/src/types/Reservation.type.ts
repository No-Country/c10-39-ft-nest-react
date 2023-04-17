export interface IReservation {
  start_hour: number;
  end_hour: number;
  userId: string;
}

export interface GetReservationType {
  capacity: number;
  description: string;
  dimensions: string;
  fieldType: string;
  id: string;
  images: string[];
  name: string;
  reservation: {
    id: string;
    hour: number;
    data: string;
  };
  sportsComplex: {
    address: string;
  };
}
