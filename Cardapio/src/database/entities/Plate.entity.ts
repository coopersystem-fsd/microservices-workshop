import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import { PlateType } from './PlateType.entity';
import { Cooking } from './Cooking.entity';
import { Avaliation } from './Avaliation.entity';
import { Ingredients } from './Ingredient.entity';

@Entity('plates')
export class Plate {

  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  slug_restaurant: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  src_picture: string;

  @Column({type: 'float'})
  price: number;

  @Column({type: 'float'})
  discount: number;

  @ManyToOne(() => PlateType, (plateType) => plateType.plates)
  plateType: PlateType;

  @ManyToOne(() => Cooking, (cooking) => cooking.plates)
  cooking: Cooking;

  @OneToMany(() => Avaliation, (avaliation) => avaliation.plate)
  avaliation: Avaliation[]

}