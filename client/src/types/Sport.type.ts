export interface sportData {
  id: string;
  images: string[];
  name: string;
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
