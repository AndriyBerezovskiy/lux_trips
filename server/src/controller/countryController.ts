import { Request, Response } from 'express';

import { ICountry } from '../entity/Country';
import { countryService } from '../services/countryService';

class CountryController {
    public async createCountry(req:Request, res:Response): Promise<Response<ICountry>> {
        const createdCountry = await countryService.createCountry(req.body);
        return res.json(createdCountry);
    }

    public async getCountry(req:Request, res:Response): Promise<Response<ICountry[]>> {
        const countries = await countryService.countries();
        return res.json(countries);
    }
}

export const countryController = new CountryController();
