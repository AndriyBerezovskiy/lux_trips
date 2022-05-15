import { Column, Entity, OneToMany } from 'typeorm';

import { CommonFields } from './CommonFields';
import { Tour } from './Tours';

export interface IType {
    typeName: string
}

@Entity('TypeTour', { database: 'travel_trip' })
export class TypeTour extends CommonFields implements IType {
    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        typeName: string;

    @OneToMany(() => Tour, (tour) => tour.type)
        tour: Tour[];
}
