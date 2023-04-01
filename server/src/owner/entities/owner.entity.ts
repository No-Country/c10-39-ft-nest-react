import { SportsComplex } from "src/sports-complex/entities/sports-complex.entity";
import User from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Owner")
export class Owner {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text', {
        unique: true
    })
    DNI: string;
    @Column('text')
    address: string;
    @Column('text')
    phone: string;

    @OneToMany(type => SportsComplex, sportsComplex => sportsComplex.owner)
    sportsComplex: SportsComplex[];

    @OneToOne(type => User, user => user.owner)
    user: User;

}
export default Owner;