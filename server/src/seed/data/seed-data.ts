import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from "bcrypt";
import { SALT } from "src/Core/Constants";

interface SeedSport {
  id: string;
  name: string;
  images: string[];
  sportfieldsId?: string[];
}

// interface SeedSportWithUUID extends SeedSport {
//   id: string;
// }

interface SeedSportField {
  id: string;
  name: string;
  description: string;
  dimensions: string;
  images: string[];
  sportId?: string;
  sportComplexId?: string;
  reservationId?: string[]
}

// interface SeedSportFieldRecord extends SeedSportField {
//   sport: SeedSport;
// }

interface SeedUsers {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  ownerId?: string;
}
interface SeedOwners {
  id?: string;
  DNI: string;
  address: string;
  phone: string;
  userId?: any;
  sportsComplexId?: string;
}
interface SeedSportsComplex {
  id: string;
  email: string;
  address: string;
  phone: string;
  name: string;
  description: string;
  image: string[];
  grills?: boolean;
  locker?: boolean;
  showers?: boolean;
  bathrooms?: boolean;
  restobar?: boolean;
  parking?: boolean;
  ownerId?: string;
  sportfieldsId?: string[];
}

interface SeedData {
  users: SeedUsers[];
  owners: SeedOwners[];
  sportscomplex: SeedSportsComplex[];
  sports: SeedSport[];
  sportfields: SeedSportField[]
  // sports: SeedSportWithUUID[];
  // sportfields: SeedSportFieldRecord[]
}
// DATOS
// Crear relaciones
const idRelations = [
  {
    idUser: uuidv4(),
    idOwner: uuidv4(),
    idSportComplex: uuidv4(),
    idSportField: uuidv4(),
  },
  {
    idUser: uuidv4(),
    idOwner: uuidv4(),
    idSportComplex: uuidv4(),
    idSportField: uuidv4(),
  },
  {
    idUser: uuidv4(),
    idOwner: uuidv4(),
    idSportComplex: uuidv4(),
    idSportField: uuidv4(),
  },
]

const sports: SeedSport[] = [
  {
    id: uuidv4(),
    name: 'football',
    images: [
      'https://img.freepik.com/fotos-premium/cerca-delantero-futbol-listo-patear-pelota-fuego-estadio_207634-7.jpg?w=2000',
    ],
  },
  {
    id: uuidv4(),
    name: 'basketball',
    images: ['https://img.freepik.com/foto-gratis/aro-baloncesto_1127-3376.jpg'],
  },
  {
    id: uuidv4(),
    name: 'tennis',
    images: [
      'https://images.sportscity.it/1920x1080/Schermata_2023-01-02_alle_13_1215142572691672663113.jpg',
    ],
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
    name: 'La Bombonerita',
    description: 'Cancha de futbol 5 de pasto sintetico y cerrado.',
    dimensions: '30x16',
    images: [
      'https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_la-cancha-f%C3%BAtbol-5-y-6-.-2.jpg',
    ],
    sportId: sports[0].id,
    sportComplexId: idRelations[0].idSportComplex
  },
  {
    id: uuidv4(),
    name: 'El Monumental',
    description: 'Cancha de futbol 11 de pasto natural.',
    dimensions: '90x45',
    images: ['https://donpotrero.com/img/posts/2/medidas_sm.jpg'],
    sportId: sports[0].id,
    sportComplexId: idRelations[0].idSportComplex
  },
  {
    id: uuidv4(),
    name: 'Staples Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: ['https://integralspor.com/uploads/blog/detail/162445d5fbd2b893161.jpg'],
    sportId: sports[1].id,
    sportComplexId: idRelations[0].idSportComplex
  },
  {
    id: uuidv4(),
    name: 'Madison Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.geoplastglobal.com/wp-content/uploads/2016/09/basket_indoor_gripper_geoplast-3.jpg',
    ],
    sportId: sports[1].id,
    sportComplexId: idRelations[0].idSportComplex
  },
  {
    id: uuidv4(),
    name: 'Quality Sport',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2022/05/tipos-de-superficies-de-pista-de-basket.png',
    ],
    sportId: sports[1].id,
    sportComplexId: idRelations[1].idSportComplex
  },
  {
    id: uuidv4(),
    name: 'United Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.revistaelabasto.com.ar/wp-content/uploads/2021/03/156221395_4205449606134895_5504940228789878318_o.jpg',
    ],
    sportId: sports[1].id,
    sportComplexId: idRelations[1].idSportComplex
  },
  {
    id: uuidv4(),
    name: 'American Airlines Center',
    description: 'Cancha de basket cerrada.',
    dimensions: '28x15',
    images: [
      'https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2022/05/tipos-de-superficies-de-pista-de-basket.png',
    ],
    sportId: sports[1].id,
    sportComplexId: idRelations[1].idSportComplex
  },
];



const users: SeedUsers[] = [
  {
    id: idRelations[0].idUser,
    email: "test1@gmail.com",
    firstName: "test1",
    lastName: "test1",
    password: bcrypt.hashSync("12345Test", SALT),
    ownerId: idRelations[0].idOwner,
  },
  {
    id: idRelations[1].idUser,
    email: "test2@gmail.com",
    firstName: "test2",
    lastName: "test2",
    password: bcrypt.hashSync("12345Test", SALT),
    ownerId: idRelations[1].idOwner,
  },
  {
    id: uuidv4(),
    email: "test3@gmail.com",
    firstName: "test3",
    lastName: "test3",
    password: bcrypt.hashSync("12345Test", SALT),
  },
];
const sportscomplex: SeedSportsComplex[] = [
  {
    id: idRelations[0].idSportComplex,
    name: 'Quality',
    email: 'quality1@gmail.com',
    address: 'Calle Fuerza Aerea 1234',
    phone: "+54 9 3512268833",
    description: 'Complejo Deportivo de primer nivel con toda la equipacion disponible para el deporte amateur',
    image: ['https://inuba.com/wp-content/uploads/2022/03/que-es-un-complejo-deportivo.webp'],
    bathrooms: true,
    grills: true,
    locker: true,
    parking: true,
    restobar: true,
    showers: true,
    ownerId: idRelations[0].idOwner,
    sportfieldsId: [sportfields[0].id, sportfields[1].id, sportfields[2].id, sportfields[3].id]
  },
  {
    id: idRelations[1].idSportComplex,
    name: 'Centro de Alto Rendimiento Deportivo Amadeo Nuccetelli',
    email: 'card_amadeo@gmail.com',
    address: 'Calle Rosario de Sante Fe 15',
    phone: "+54 9 3512268833",
    description: 'Complejo Deportivo de primer nivel con toda la equipacion disponible para el deporte amateur',
    image: ['https://inuba.com/wp-content/uploads/2022/03/que-es-un-complejo-deportivo.webp'],
    bathrooms: true,
    grills: true,
    locker: true,
    parking: true,
    restobar: true,
    showers: true,
    ownerId: idRelations[1].idOwner,
    sportfieldsId: [sportfields[5].id, sportfields[6].id, sportfields[4].id]
  },
]
const owners: SeedOwners[] = [
  {
    id: idRelations[0].idOwner,
    address: 'calle 1',
    DNI: "111222333",
    phone: "123123123",
    userId: idRelations[0].idUser,
    sportsComplexId: idRelations[0].idSportComplex
  },
  {
    id: idRelations[1].idOwner,
    address: 'calle 2',
    DNI: "231434123",
    phone: "3123122343",
    userId: idRelations[1].idUser,
    sportsComplexId: idRelations[1].idSportComplex
  }
]

export const initialData: SeedData = {
  users,
  owners,
  sportscomplex,
  sportfields,
  sports
  // sports: sportsWithUUIDS,
  // sportfields: sportFields.map((field) => {
  //   const idx = field.sportId ? field.sportId - 1 : 0;
  //   const sport = sportsWithUUIDS[idx];
  //   const { sportId, ...rField } = field;
  //   return { ...rField, sport };
  // }),
};
