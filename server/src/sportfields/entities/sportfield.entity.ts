import { Expose } from 'class-transformer';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Sport } from 'src/sports/entities/sport.entity';
import { SportsComplex } from 'src/sports-complex/entities/sports-complex.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Sportfield' })
export class SportField {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  dimensions: string;

  @Column('text', {
    array: true,
    default: ['https://img.freepik.com/free-vector/sport-fields-isometric-set_1284-24824.jpg'],
  })
  images: string[];

  //Relation SportField -> sports
  @ManyToOne(() => Sport, (sport) => sport.sportfields)
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  //Relation SportField -> sportsComplex
  // TODO: It shouldn't be null
  @ManyToOne(() => SportsComplex, (sportsComplex) => sportsComplex.sportfields, {
    eager: true,
  })
  @JoinColumn({ name: 'sportsComplexId' })
  sportsComplex: SportsComplex;

  @OneToMany(() => Reservation, (reservation) => reservation.sportfield, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  reservation: Reservation[];

  get availability() {
    return this.sportsComplex.availability;
  }
}

export default SportField;
