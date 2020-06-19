import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { City } from './City.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    complement: string;

    @ApiProperty()
    @Column()
    number: string;

    @ApiProperty()
    @Column()
    reference_point: string;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    owner_identify: string;

    @ApiProperty()
    @Column()
    zip_code: string;

    @ApiProperty()
    @Column({type: 'varchar', length: 300})
    address: string;

    @ApiProperty()
    @Column()
    neightborhood: string;

    @ApiProperty()
    @Column({type: 'int'})
    city_id: number;

    @ApiProperty()
    @Column({type: 'float'})
    latitude: number;

    @ApiProperty()
    @Column({type: 'float'})
    longitude: number;

    @ManyToOne(() => City, city => city.addresses)
    city: City;
}