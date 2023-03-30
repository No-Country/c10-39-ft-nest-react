import { Sport } from "src/sports/entities/sport.entity";

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'sportfields' })
export class Sportfields {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('text')
    dimensions: string;

    @Column('boolean', { default: false })
    grills: boolean;
    @Column('boolean', { default: false })
    locker: boolean;
    @Column('boolean', { default: false })
    showers: boolean;
    @Column('boolean', { default: false })
    bathrooms: boolean;
    @Column('boolean', { default: false })
    restobar: boolean;
    @Column('boolean', { default: false })
    parking: boolean;
    @Column('text', { array: true, default: ['https://img.freepik.com/free-vector/sport-fields-isometric-set_1284-24824.jpg'] })
    images: string[];

    //Relation sportfields -> sports
    @ManyToOne(
        () => Sport,
        (sport) => sport.sportfields,

        { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
    )
    @JoinColumn({ name: 'sportId' })
    sport: Sport;
    @Column()
    sportId: number;
}

