import { SportsComplex } from "src/sports-complex/entities/sports-complex.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Owner")
export class Owner {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text', {
        unique: true
    })
    email: string;
    @Column({ type: 'text', nullable: true  })
    password: string;
    @Column('text')
    firstName: string;
    @Column('text')
    lastName: string;
    @Column('bool')
    isActive: boolean;
    @Column('text')
    dni: string;
    @Column('text')
    address: string;
    @Column('text')
    phone: string;

    @OneToMany(type => SportsComplex, sportsComplex => sportsComplex.owner)
    sportsComplex: SportsComplex[];

}
export default Owner;