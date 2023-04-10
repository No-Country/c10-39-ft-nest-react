export interface SportSeed {
  name: string;
  images: string[];
}

export interface SportFieldSeed {
  name: string;
  description: string;
  dimensions: string;
  images: string[];
  sport: string;
}

export interface SeedData {
  sports: SportSeed[];
  sportFields: SportFieldSeed[];
}

export const sportsData: SportSeed[] = [
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

export const sportFieldsData: SportFieldSeed[] = [
  {
    name: 'La Bombonerita',
    description: 'Cancha de futbol 5 de pasto sintetico y cerrado.',
    dimensions: '30x16',
    images: [
      'https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_la-cancha-f%C3%BAtbol-5-y-6-.-2.jpg',
    ],
    sport: 'football',
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
