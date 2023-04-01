import Owner from "src/owner/entities/owner.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
  @Column("bool")
  isActive: boolean;

  @OneToOne((type) => Owner, (owner) => owner.user)
  @JoinColumn()
  owner?: Owner;
}
export default User;
