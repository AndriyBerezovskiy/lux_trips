import { Request, Response } from 'express';

import { IType } from '../entity/TypeTour';
import { typeService } from '../services/typeService';

class TypeController {
    public async createType(req:Request, res:Response): Promise<Response<IType>> {
        const createdType = await typeService.createTour(req.body);
        return res.json(createdType);
    }

    public async getType(req:Request, res:Response): Promise<Response<IType[]>> {
        const types = await typeService.types();
        return res.json(types);
    }
}

export const typeController = new TypeController();
