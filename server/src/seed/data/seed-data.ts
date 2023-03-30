interface SeedSport {
    id: number;
    name: string;
    images: string[];
}
interface SeedSportfields {
    name: string;
    description: string;
    dimensions: string;
    grills?: boolean;
    locker?: boolean;
    showers?: boolean;
    bathrooms?: boolean;
    restobar?: boolean;
    parking?: boolean;
    images: string[],
    sportId?: any,
}
interface SeedData {
    sports: SeedSport[];
    sportfields: SeedSportfields[]
}

export const initialData: SeedData = {
    sports: [
        {
            id: 1,
            name: 'football',
            images: ['https://img.freepik.com/fotos-premium/cerca-delantero-futbol-listo-patear-pelota-fuego-estadio_207634-7.jpg?w=2000']
        },
        {
            id: 2,
            name: 'basketball',
            images: ['https://img.freepik.com/foto-gratis/aro-baloncesto_1127-3376.jpg']
        },
        {
            id: 3,
            name: 'tennis',
            images: ['https://images.sportscity.it/1920x1080/Schermata_2023-01-02_alle_13_1215142572691672663113.jpg']
        },
        {
            id: 4,
            name: 'volleyball',
            images: ['https://img.freepik.com/foto-gratis/pelota-golpeando-red_23-2149450951.jpg']
        },
    ],
    sportfields: [
        {
            name: 'La Bombonerita',
            description: 'Cancha de futbol 5 de pasto sintetico y cerrado.',
            dimensions: '30x16',
            bathrooms: true,
            sportId: 1,
            images: ['https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_la-cancha-f%C3%BAtbol-5-y-6-.-2.jpg']
        },
        {
            sportId: 1,
            name: 'El Monumental',
            description: 'Cancha de futbol 11 de pasto natural.',
            dimensions: '90x45',
            grills: true,
            locker: true,
            showers: true,
            bathrooms: true,
            restobar: true,
            parking: true,
            images: ['https://donpotrero.com/img/posts/2/medidas_sm.jpg']
        },
        {
            sportId: 2,
            name: 'Staples Center',
            description: 'Cancha de basket cerrada.',
            dimensions: '28x15',
            grills: true,
            locker: true,
            showers: true,
            bathrooms: true,
            restobar: true,
            parking: true,
            images: ['https://integralspor.com/uploads/blog/detail/162445d5fbd2b893161.jpg']
        },
        {
            sportId: 2,
            name: 'Madison Center',
            description: 'Cancha de basket cerrada.',
            dimensions: '28x15',
            grills: true,
            locker: true,
            showers: true,
            bathrooms: true,
            restobar: true,
            parking: true,
            images: ['https://www.geoplastglobal.com/wp-content/uploads/2016/09/basket_indoor_gripper_geoplast-3.jpg']
        },
        {
            sportId: 2,
            name: 'Quality Sport',
            description: 'Cancha de basket cerrada.',
            dimensions: '28x15',
            grills: true,
            locker: true,
            showers: true,
            bathrooms: true,
            restobar: true,
            parking: true,
            images: ['https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2022/05/tipos-de-superficies-de-pista-de-basket.png']
        },
        {
            sportId: 2,
            name: 'United Center',
            description: 'Cancha de basket cerrada.',
            dimensions: '28x15',
            grills: false,
            locker: false,
            showers: false,
            bathrooms: true,
            restobar: true,
            parking: true,
            images: ['https://www.revistaelabasto.com.ar/wp-content/uploads/2021/03/156221395_4205449606134895_5504940228789878318_o.jpg']
        },
        {
            sportId: 2,
            name: 'American Airlines Center',
            description: 'Cancha de basket cerrada.',
            dimensions: '28x15',
            grills: true,
            locker: true,
            showers: true,
            bathrooms: true,
            restobar: true,
            parking: true,
            images: ['https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2022/05/tipos-de-superficies-de-pista-de-basket.png']
        },

    ]

}