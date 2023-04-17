export default interface ComplexType {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  grills: boolean;
  locker: boolean;
  lat: 0;
  lng: 0;
  showers: boolean;
  restobar: boolean;
  parking: boolean;
  owner?: any;
  availability: any[];
}
