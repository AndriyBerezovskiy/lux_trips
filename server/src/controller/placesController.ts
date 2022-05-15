import { Request, Response } from 'express';

import { IPlaces } from '../entity/Places';
import { placesService } from '../services/placesService';

export class PlacesController {
    public async createPlaces(req: Request, res: Response):Promise<Response<IPlaces>> {
        const createdPlaces = await placesService.createPlaces(req.body);
        return res.json(createdPlaces);
    }

    public async getPlaces(req: Request, res: Response):Promise<Response<IPlaces[]>> {
        const places = await placesService.places();
        return res.json(places);
    }
}

export const placesController = new PlacesController();
