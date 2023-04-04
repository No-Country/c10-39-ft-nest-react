import { Reservation } from "src/reservation/entities/reservation.entity";
import Owner from "src/sports-complex/entities/owner.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("text", {
    unique: true,
  })
  email: string;
  @Column({ type: "text", nullable: true })
  password: string;
  @Column("text", {nullable: true })
  firstName: string;
  @Column("text", {nullable: true })
  lastName: string;
  @Column("bool", {default: true})
  isActive: boolean;

  @OneToOne((type) => Owner, (owner) => owner.user)
  @JoinColumn()
  owner?: Owner;


  @OneToMany(() => Reservation, (reservation) => reservation.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  reservation: Reservation[];
}
export default User;
