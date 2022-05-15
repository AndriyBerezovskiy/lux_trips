import { CommonFields } from './CommonFields';
import { Column, Entity, OneToMany } from 'typeorm';
import { Country } from './Country';

export interface IWorld{
    worldName: string;
}

@Entity('World', { database: 'travel_trip' })
export class World extends CommonFields implements IWorld {
    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        worldName: string;

    @OneToMany(() => Country, (country) => country.world)
        country: Country[];
}
