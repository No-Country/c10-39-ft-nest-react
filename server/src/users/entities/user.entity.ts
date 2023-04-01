import Owner from "src/owner/entities/owner.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("text", {
    unique: true,
  })
  email: string;
  @Column({ type: "text", nullable: true })
  password: string;
  @Column("text")
  firstName: string;
  @Column("text")
  lastName: string;
  @Column("bool")
  isActive: boolean;

  @OneToOne((type) => Owner, (owner) => owner.user)
  owner: Owner;
}
export default User;
