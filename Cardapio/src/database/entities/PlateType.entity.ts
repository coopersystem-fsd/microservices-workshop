import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'
import { Plate } from './Plate.entity';

@Entity('plate_types')
export class PlateType {

  @PrimaryGeneratedColumn()
  id: number
  

  @Column()
  name: string;

  @OneToMany(() => Plate, (plate) => plate.plateType)
  plates: Plate[]
}