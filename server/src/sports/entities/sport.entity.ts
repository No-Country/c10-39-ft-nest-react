import { Sportfields } from "src/sportfields/entities/sportfield.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'sports' })
export class Sport {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('text', { unique: true })
    name: string;

    // Relation -> sportsfields
    @OneToMany(
        () => Sportfields,
        (sportfields) => sportfields.sport,
        { cascade: true, eager: true }
    )
    sportfields?: Sportfields[];
}
