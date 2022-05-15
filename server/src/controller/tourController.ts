import { Request, Response } from 'express';

import { ITour } from '../entity/Tours';
import { tourService } from '../services/tourService';

class TourController {
    public async createTour(req:Request, res:Response): Promise<Response<ITour>> {
        const createdTour = await tourService.createTour(req.body);
        return res.json(createdTour);
    }

    public async getTour(req:Request, res:Response): Promise<Response<ITour[]>> {
        const tours = await tourService.tours();
        return res.json(tours);
    }
}

export const tourController = new TourController();
