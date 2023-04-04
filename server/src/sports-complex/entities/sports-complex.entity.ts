import { Sportfields } from "src/sportfields/entities/sportfield.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Owner from "./owner.entity";

@Entity("sportsComplex")
export class SportsComplex {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("text", {
    unique: true,
  })
  @Column("text", {
    unique: true,
    // bug
    nullable: true,
  })
  email: string;

  @Column("text")
  address: string;

  @Column("text")
  phone: string;

  @Column("text", {
    nullable: true,
  })
  name: string;

  @Column("text", {
    nullable: true,
  })
  description: string;

  @Column("text", {
    nullable: true,
  })
  image: string[];

  @Column("boolean", { default: false })
  grills?: boolean;
  @Column("boolean", { default: false })
  locker?: boolean;
  @Column("boolean", { default: false })
  showers?: boolean;
  @Column("boolean", { default: false })
  bathrooms?: boolean;
  @Column("boolean", { default: false })
  restobar?: boolean;
  @Column("boolean", { default: false })
  parking?: boolean;

  @OneToOne((type) => Owner, (owner) => owner.sportsComplex)
  owner: Owner;

  @OneToMany((type) => Sportfields, (sportfields) => sportfields.sportsComplex)
  sportfields: Sportfields[];
}
export default SportsComplex;
