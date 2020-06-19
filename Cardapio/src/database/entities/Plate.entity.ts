import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import { PlateType } from './PlateType.entity';
import { Cooking } from './Cooking.entity';
import { Avaliation } from './Avaliation.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('plates')
export class Plate {

  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  slug_restaurant: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  src_picture: string;

  @ApiProperty()
  @Column({type: 'float'})
  price: number;

  @ApiProperty()
  @Column({type: 'float'})
  discount: number;

  @ApiProperty({
    name: 'plate_type_id',
  })
  @Column()
  plateTypeId: number;

  @ApiProperty({
    name: 'cooking_id',
  })
  @Column()
  cookingId: number;

  @ApiProperty({
    name: 'avaliation_id',
  })
  @Column()
  avaliationId: number;


  @ManyToOne(() => PlateType, (plateType) => plateType.plates)
  plateType: PlateType;

  @ManyToOne(() => Cooking, (cooking) => cooking.plates)
  cooking: Cooking;

  @OneToMany(() => Avaliation, (avaliation) => avaliation.plate)
  avaliation: Avaliation[]

}