import { CommonFields } from './CommonFields';
import { Column, Entity, OneToMany } from 'typeorm';
import { Tour } from './Tours';

export interface IPlaces{
    namePlaces: string,
    image: string
}

@Entity('Places', { database: 'travel_trip' })
export class Places extends CommonFields implements IPlaces {
    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        namePlaces: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        image: string;

    @OneToMany(() => Tour, (tour) => tour.places)
        tours: Tour[];
}
