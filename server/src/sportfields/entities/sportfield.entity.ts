import { Sport } from "src/sports/entities/sport.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

    //Relation sportfields -> sports
    @ManyToOne(
        () => Sport,
        (sport) => sport.sportfields,
    )
    sport: Sport;
}

