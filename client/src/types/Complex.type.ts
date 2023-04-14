export default interface ComplexType {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  grills: boolean;
  locker: boolean;
  showers: boolean;
  restobar: boolean;
  parking: boolean;
  availability: any[];
}
