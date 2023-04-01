import { Sportfields } from "src/sportfields/entities/sportfield.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'sports' })
export class Sport {
    @PrimaryGeneratedColumn('rowid')
   // @PrimaryGeneratedColumn('increment')

    id: number;
    @Column('text', { unique: true })
    name: string;
    @Column('text', { array: true, default: ['https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000'] })
    images: string[]

    // Relation -> sportsfields
    @OneToMany(
        () => Sportfields,
        (sportfields) => sportfields.sport,
        { cascade: true, eager: true }
    )
    sportfields?: Sportfields[];
}