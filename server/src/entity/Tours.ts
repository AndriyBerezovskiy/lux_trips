import {
    Entity, Column,
    ManyToOne, JoinColumn,
} from 'typeorm';

import { CommonFields } from './CommonFields';
import { Country } from './Country';
import { TypeTour } from './TypeTour';
import { Places } from './Places';

export interface ITour {
    tourName: string,
    image: string,
    price: number,
    rating: number,
    countryId: number,
    typeTourId: number,
    placesId: number
}

@Entity('Tours', { database: 'travel_trip' })
export class Tour extends CommonFields implements ITour {
    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        tourName: string;

    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        image: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        price: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        rating: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        countryId: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        typeTourId: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        placesId: number;

    @ManyToOne(() => Country, (country) => country.tours)
    @JoinColumn({ name: 'countryId' })
        country: Country;

    @ManyToOne(() => TypeTour, (type) => type.tour)
    @JoinColumn({ name: 'typeTourId' })
        type: TypeTour;

    @ManyToOne(() => Places, (place) => place.tours)
    @JoinColumn({ name: 'placesId' })
        places: Places[];
}
