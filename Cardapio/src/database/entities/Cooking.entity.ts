import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'
import { Plate } from './Plate.entity';

@Entity('cookings')
export class Cooking {

  @PrimaryGeneratedColumn()
  id: number
  

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Plate, (plate) => plate.plateType)
  plates: Plate[]
}