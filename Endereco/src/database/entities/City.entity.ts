import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { State } from './State.entity'
import { Address } from './Address.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity('City')
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    uf_fk: string;

    @ManyToOne(() => State, state => state.cities)
    state: State;

    @OneToMany(() => Address, (address) => address.city)
    addresses: Address[]
}