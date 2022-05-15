import {
    EntityRepository, getManager, Repository,
} from 'typeorm';

import { Country, ICountry } from '../../entity/Country';

@EntityRepository(Country)
class CountryRepository extends Repository<Country> {
    public async createCountry(country: ICountry):Promise<ICountry> {
        return getManager().getRepository(Country).save(country);
    }

    public async getCountry():Promise<ICountry[]> {
        return getManager().getRepository(Country).find();
    }
}

export const countryRepository = new CountryRepository();
