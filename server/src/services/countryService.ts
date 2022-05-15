import { ICountry } from '../entity/Country';
import { countryRepository } from '../repositories/country/countryRepository';

class CountryService {
    public async createCountry(country: ICountry):Promise<ICountry> {
        return countryRepository.createCountry(country);
    }

    public async countries(): Promise<ICountry[]> {
        return countryRepository.getCountry();
    }
}

export const countryService = new CountryService();
