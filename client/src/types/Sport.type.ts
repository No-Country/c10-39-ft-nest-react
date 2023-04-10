export interface sportData {
  id: string;
  images: string[];
  name: string;
  description: string;
  sportComplex: {
    ubication: string;
    data: {
      parking: true;
      grill: true;
      changing: true;
      bar: true;
    };
  };
}
