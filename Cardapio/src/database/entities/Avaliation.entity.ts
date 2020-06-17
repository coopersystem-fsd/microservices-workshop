import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'
import { Plate } from './Plate.entity';

@Entity('avaliations')
export class Avaliation {

  @PrimaryGeneratedColumn()
  id: number
  

  @Column()
  cpf_user: string;

  @Column({type: 'int'})
  avaliation: number;

  @ManyToOne(() => Plate, (plate) => plate.plateType)
  plate: Plate
}