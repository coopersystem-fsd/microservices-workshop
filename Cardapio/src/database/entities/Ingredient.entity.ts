import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import { Plate } from './Plate.entity';

@Entity('ingredients')
export class Ingredients {

  @PrimaryGeneratedColumn()
  id: number
  

  @Column()
  name: string;

  @Column({type: 'int'})
  qtd: number;

  @Column({type: 'int'})
  measure: number;

  @ManyToMany(type => Plate)
  @JoinTable()
  plates: Plate[];
}