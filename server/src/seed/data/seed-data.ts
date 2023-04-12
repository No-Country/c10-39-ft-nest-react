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
      'https://img.freepik.com/fotos-premium/cerca-delantero-futbol-listo-patear-pelota-fuego-estadio_207634-7.jpg?w=2000',
    ],
  },
  {
    name: 'basketball',
    images: ['https://img.freepik.com/foto-gratis/aro-baloncesto_1127-3376.jpg'],
  },
  {
    name: 'tennis',
    images: [
      'https://images.sportscity.it/1920x1080/Schermata_2023-01-02_alle_13_1215142572691672663113.jpg',
    ],
  },
  {
    name: 'volleyball',
    images: ['https://img.freepik.com/foto-gratis/pelota-golpeando-red_23-2149450951.jpg'],
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
      'https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_la-cancha-f%C3%BAtbol-5-y-6-.-2.jpg',
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
    images: ['https://donpotrero.com/img/posts/2/medidas_sm.jpg'],
    sport: 'basketball',
  },
  {
    name: 'Staples Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: ['https://integralspor.com/uploads/blog/detail/162445d5fbd2b893161.jpg'],
    sport: 'basketball',
  },
  {
    name: 'Madison Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.geoplastglobal.com/wp-content/uploads/2016/09/basket_indoor_gripper_geoplast-3.jpg',
    ],
    sport: 'basketball',
  },
  {
    name: 'Quality Sport',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2022/05/tipos-de-superficies-de-pista-de-basket.png',
    ],
    sport: 'basketball',
  },
  {
    name: 'United Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.revistaelabasto.com.ar/wp-content/uploads/2021/03/156221395_4205449606134895_5504940228789878318_o.jpg',
    ],
    sport: 'basketball',
  },
  {
    name: 'American Airlines Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2022/05/tipos-de-superficies-de-pista-de-basket.png',
    ],
    sport: 'basketball',
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
    images: ['https://inuba.com/wp-content/uploads/2022/03/que-es-un-complejo-deportivo.webp'],
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
    images: ['https://inuba.com/wp-content/uploads/2022/03/que-es-un-complejo-deportivo.webp'],
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
