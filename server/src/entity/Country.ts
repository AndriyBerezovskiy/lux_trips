import {
    Column, Entity, JoinColumn, ManyToOne, OneToMany,
} from 'typeorm';

import { CommonFields } from './CommonFields';
import { ITour, Tour } from './Tours';
import { World } from './World';

export interface ICountry {
    countryName: string,
    worldId: number,
    tours: ITour[]
}

@Entity('Country', { database: 'travel_trip' })
export class Country extends CommonFields implements ICountry {
    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        countryName: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        worldId: number;

    @OneToMany(() => Tour, (tour) => tour.country)
        tours: Tour[];

    @ManyToOne(() => World, (world) => world.country)
    @JoinColumn({ name: 'worldId' })
        world: World;
}
