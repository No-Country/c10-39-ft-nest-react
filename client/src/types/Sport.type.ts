export interface hoursType {
  end_hour: string;
  id: string;
  start_hour: string;
}

export interface sportData {
  id: string;
  images: string[];
  name: string;
  description: string;
  capacity: number;
  dimensions: string;
  fieldType: string;
  sport: any;
  sportComplex: {
    ubication: string;
    parking: boolean;
    grill: boolean;
    locker: boolean;
    bathrooms: boolean;
    restobar: boolean;
    showers: boolean;
    availability: hoursType[];
  };
}
