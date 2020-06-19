import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { City } from './City.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity('State')
export class State {
    @PrimaryGeneratedColumn()
    uf_pk: string;

    @ApiProperty()
    @Column()
    name: string;

    @OneToMany(() => City, (city) => city.state)
    cities: City[]
}