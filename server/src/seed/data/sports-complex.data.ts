export interface SportsComplexSeed {
  email: string;
  address: string;
  phone: string;
  name: string;
  description: string;
  images: string[];
  grills: boolean;
  locker: boolean;
  showers: boolean;
  bathrooms: boolean;
  restobar: boolean;
  parking: boolean;
}

export const sportsComplexsData: SportsComplexSeed[] = [
  {
    email: 'complex@gmail.com',
    address: 'complexAddres',
    phone: '1232123123',
    name: 'complexName',
    description: 'complexDescription',
    images: ['complexImage'],
    grills: true,
    locker: false,
    showers: true,
    bathrooms: false,
    restobar: true,
    parking: false,
  },
];
