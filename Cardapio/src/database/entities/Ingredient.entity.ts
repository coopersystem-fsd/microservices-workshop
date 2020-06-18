import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import { Plate } from './Plate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('ingredients')
export class Ingredient {

  @PrimaryGeneratedColumn()
  id: number
  
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({type: 'int'})
  qtd: number;

  @ApiProperty()
  @Column({type: 'int'})
  measure: number;

  @ApiProperty({
    name: 'plate_id',
  })
  @Column()
  plateId: number;

  @ManyToMany(type => Plate)
  @JoinTable()
  plates: Plate[];
}