import * as bcrypt from 'bcrypt';
import { SALT } from 'src/Core/Constants';
import { v4 as uuidv4 } from 'uuid';

interface SeedSport {
  name: string;
  images: string[];
  sportfieldsId?: string[];
}

// interface SeedSportWithUUID extends SeedSport {
//   id: string;
// }
//
interface SeedReservation {
  date: string;
  hour: number;
}

interface SeedSportField {
  name: string;
  description: string;
  dimensions: string;
  images: string[];
  sport: string;
  reservation?: SeedReservation[];
}

// interface SeedSportFieldRecord extends SeedSportField {
//   sport: SeedSport;
// }

interface SeedUsers {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  owner?: SeedOwners;
}

interface SeedOwners {
  DNI: string;
  address: string;
  phone: string;
}

interface SeedAvailabilityRange {
  start_hour: number;
  end_hour: number;
}

interface SeedSportsComplex {
  email: string;
  address: string;
  phone: string;
  name: string;
  description: string;
  images: string[];
  grills?: boolean;
  locker?: boolean;
  showers?: boolean;
  bathrooms?: boolean;
  restobar?: boolean;
  parking?: boolean;
  lat: number;
  lng: number;
  availability?: SeedAvailabilityRange[];
}

interface SeedData {
  users: SeedUsers[];
  sportscomplex: SeedSportsComplex[];
  sports: SeedSport[];
  sportfields: SeedSportField[];
}

// DATOS
// Crear relaciones
// const idRelations = [
//   {
//     idUser: uuidv4(),
//     idOwner: uuidv4(),
//     idSportComplex: uuidv4(),
//     idSportField: uuidv4(),
//   },
//   {
//     idUser: uuidv4(),
//     idOwner: uuidv4(),
//     idSportComplex: uuidv4(),
//     idSportField: uuidv4(),
//   },
//   {
//     idUser: uuidv4(),
//     idOwner: uuidv4(),
//     idSportComplex: uuidv4(),
//     idSportField: uuidv4(),
//   },
// ];

const sports: SeedSport[] = [
  {
    name: 'football',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/afcecc340efd37e7305c5d0808ca5e51',
    ],
  },
  {
    name: 'basketball',
    images: ['https://asset.cloudinary.com/djvepy9sd/70b832d4eaf371a8589fd16589c4a06b'],
  },
  {
    name: 'tennis',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/e5dd861f1db2c0c1eff4b222c45b9ee4',
    ],
  },
  {
    name: 'volleyball',
    images: ['https://asset.cloudinary.com/djvepy9sd/89a40da751aac3ac6d1106b41dd79466'],
  },
];

// const sportsWithUUIDS: SeedSportWithUUID[] = sports.map((sport) => ({
//   id: uuidv4(),
//   ...sport,
// }));

const sportfields: SeedSportField[] = [
  {
    name: 'La Bombonerita',
    description: 'Cancha de futbol 5 de pasto sintetico y cerrado.',
    dimensions: '30x16',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/8d4957770879e2ba8e0f545f4c138979',
    ],
    sport: 'football',
    reservation: [
      {
        hour: 12,
        date: '2023-04-23',
      },
    ],
  },
  {
    name: 'El Monumental',
    description: 'Cancha de futbol 11 de pasto natural.',
    dimensions: '90x45',
    images: ['https://asset.cloudinary.com/djvepy9sd/b62994503e9bbaeaa73d1337572382e5'],
    sport: 'football',
  },
  {
    name: 'El Fortin',
    description: 'Cancha de futbol 5.',
    dimensions: '90x45',
    images: ['https://asset.cloudinary.com/djvepy9sd/bd699a0ca98c4bc09a1a029da1a5f9c8'],
    sport: 'football',
  },
  {
    name: 'Staples Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: ['https://asset.cloudinary.com/djvepy9sd/f1806dba33030b2aa20c08c1c675a07a'],
    sport: 'basketball',
  },
  {
    name: 'Madison Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/69ecea790a85dd22f7b0c09b76773df1',
    ],
    sport: 'basketball',
  },
  {
    name: 'Quality Sport',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/d27ce63b4e35c984586c66112044bd0f',
    ],
    sport: 'basketball',
  },
  {
    name: 'United Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/284c74e4ec4af9d5d1a35ffcc69ade65',
    ],
    sport: 'basketball',
  },
  {
    name: 'American Airlines Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/8f35148d1fa2265e4293de2baa40cfea',
    ],
    sport: 'basketball',
  },
  {
    name: 'Court Nalbandian',
    description: 'Cancha de tenis de polvo de ladrillo.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/ca90d4832bf05d5c062281c13aeb3607',
    ],
    sport: 'tennis',
  },
  {
    name: 'Court Pitt Sampras',
    description: 'Cancha de tenis de cesped.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/8f35148d1fa2265e4293de2baa40cfea',
    ],
    sport: 'tennis',
  },
  {
    name: 'Court Mago Coria',
    description: 'Cancha de tenis cemento.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/28a6f07d54b142cb11bd051deb0619e4',
    ],
    sport: 'tennis',
  },
  {
    name: 'Court Roger Federer',
    description: 'Cancha de tenis cesped sintetico.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/57c95b6672c49886bfcef6e0fc67e0b1',
    ],
    sport: 'tennis',
  },
  {
    name: 'Court Nadal',
    description: 'Cancha de tenis polvo de ladrillo.',
    dimensions: '28x15',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/4c846f27399e5ccd51e0479e31785db5',
    ],
    sport: 'tennis',
  },
  {
    name: 'Cancha de Voley',
    description: 'Cancha de voley de parquet.',
    dimensions: '16x8',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/bc7ead9880af26c7f0ebdba2872ee385',
    ],
    sport: 'volleyball',
  },
  {
    name: 'Cancha de Voley',
    description: 'Cancha de voley de cemento con red.',
    dimensions: '16x8',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/71a38042cf4c90142f39daadcc491563',
    ],
    sport: 'volleyball',
  },
  {
    name: 'Cancha de Voley Rodman',
    description: 'Cancha de voley de cemento con red.',
    dimensions: '16x8',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/22c617baeeae39ac1cc215a5f6f184cf',
    ],
    sport: 'volleyball',
  },
  {
    name: 'Cancha de Voley Mariana',
    description: 'Cancha de voley de cemento con red.',
    dimensions: '16x8',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/9cb7270bfff434b1aca668aafb9a3091',
    ],
    sport: 'volleyball',
  },
  {
    name: 'Cancha de Voley Ramallo',
    description: 'Cancha de voley de cemento con red.',
    dimensions: '16x8',
    images: [
      'https://asset.cloudinary.com/djvepy9sd/24134b2524cd19aed0419d79d825334c',
    ],
    sport: 'volleyball',
  },
];

const users: SeedUsers[] = [
  {
    email: 'test1@gmail.com',
    firstName: 'test1',
    lastName: 'test1',
    password: bcrypt.hashSync('12345Test', SALT),
  },
  {
    email: 'test2@gmail.com',
    firstName: 'test2',
    lastName: 'test2',
    password: bcrypt.hashSync('12345Test', SALT),
    owner: {
      address: 'calle 1',
      DNI: '111222333',
      phone: '123123123',
    },
  },
  {
    email: 'test3@gmail.com',
    firstName: 'test3',
    lastName: 'test3',
    password: bcrypt.hashSync('12345Test', SALT),
    owner: {
      address: 'calle 2',
      DNI: '231434123',
      phone: '3123122343',
    },
  },
];

const sportscomplex: SeedSportsComplex[] = [
  {
    name: 'Quality',
    email: 'quality1@gmail.com',
    address: 'Calle Fuerza Aerea 1234',
    phone: '+54 9 3512268833',
    description:
      'Complejo Deportivo de primer nivel con toda la equipacion disponible para el deporte amateur',
    images: ['https://asset.cloudinary.com/djvepy9sd/d49f9604602a2cefcd6af1fd93f2c31e'],
    bathrooms: true,
    grills: true,
    locker: true,
    parking: true,
    restobar: true,
    showers: true,
    lat: -32.4201,
    lng: -64.1888,
    availability: [
      {
        start_hour: 7,
        end_hour: 11,
      },
      {
        start_hour: 16,
        end_hour: 22,
      },
    ],
  },
  {
    name: 'Centro de Alto Rendimiento Deportivo Amadeo Nuccetelli',
    email: 'card_amadeo@gmail.com',
    address: 'Calle Rosario de Sante Fe 15',
    phone: '+54 9 3512268833',
    description:
      'Complejo Deportivo de primer nivel con toda la equipacion disponible para el deporte amateur',
    images: ['https://asset.cloudinary.com/djvepy9sd/8787789bd6ef1a24146a2d7798037bde'],
    bathrooms: true,
    grills: true,
    locker: true,
    parking: true,
    restobar: true,
    showers: true,
    lat: -32.4201,
    lng: -64.1888,
    availability: [
      {
        start_hour: 11,
        end_hour: 13,
      },
      {
        start_hour: 14,
        end_hour: 24,
      },
    ],
  },
];

export const initialData: SeedData = {
  users,
  sportscomplex,
  sportfields,
  sports,
  // sports: sportsWithUUIDS,
  // sportfields: sportFields.map((field) => {
  //   const idx = field.sportId ? field.sportId - 1 : 0;
  //   const sport = sportsWithUUIDS[idx];
  //   const { sportId, ...rField } = field;
  //   return { ...rField, sport };
  // }),
};
