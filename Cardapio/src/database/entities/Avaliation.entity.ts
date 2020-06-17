import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Plate } from './Plate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('avaliations')
export class Avaliation {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  cpf_user: string;

  @ApiProperty()
  @Column({ type: 'int' })
  avaliation: number;

  @ApiProperty({
    name: 'plate_id',
  })
  @Column()
  plateId: number;

  @ManyToOne(
    () => Plate,
    plate => plate.plateType,
  )
  plate: Plate;
}
