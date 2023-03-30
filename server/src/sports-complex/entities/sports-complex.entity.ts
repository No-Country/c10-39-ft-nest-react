import Owner from "src/owner/entities/owner.entity";
import { Sportfields } from "src/sportfields/entities/sportfield.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("sportsComplex")
export class SportsComplex {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("text", {
    unique: true,
  })
  @Column("text")
  address: string;
  @Column("text")
  phone: string;
  @Column("text")
  name: string;
  @Column("text")
  description: string;
  @Column("text")
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

  @ManyToOne((type) => Owner, (owner) => owner.sportsComplex)
  owner: Owner;

  @OneToMany((type) => Sportfields, (sportfields) => sportfields.sportsComplex)
  sportfields: Sportfields[];
}
export default SportsComplex;
