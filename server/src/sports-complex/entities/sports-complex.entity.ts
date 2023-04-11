import { Point } from 'geojson';
import Owner from 'src/owner/entities/owner.entity';
import { SportField } from 'src/sportfields/entities/sportfield.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SportsComplex')
export class SportsComplex {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text', {
    unique: true,
  })
  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  address: string;

  @Column('text')
  phone: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'geography',
    nullable: true,
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  location: Point;

  @Column('text')
  image: string[];

  @Column('boolean', { default: false })
  grills?: boolean;
  @Column('boolean', { default: false })
  locker?: boolean;
  @Column('boolean', { default: false })
  showers?: boolean;
  @Column('boolean', { default: false })
  bathrooms?: boolean;
  @Column('boolean', { default: false })
  restobar?: boolean;
  @Column('boolean', { default: false })
  parking?: boolean;

  @ManyToOne((type) => Owner, (owner) => owner.sportsComplex, {
    eager: true,
  })
  @JoinColumn({ name: "ownerId" })
  owner: Owner;
  @Column()
  ownerId: string; 

  @OneToMany((type) => SportField, (sportfields) => sportfields.sportsComplex)
  sportfields: SportField[];
}
export default SportsComplex;
