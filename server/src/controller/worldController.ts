import { Request, Response } from 'express';

import { worldService } from '../services/worldService';
import { IWorld } from '../entity/World';

class WorldController {
    public async createWorld(req: Request, res: Response):Promise<Response<IWorld>> {
        const createdWorld = await worldService.createWorld(req.body);
        return res.json(createdWorld);
    }

    public async getWorld(req: Request, res: Response):Promise<Response<IWorld[]>> {
        const worlds = await worldService.getWorld();
        return res.json(worlds);
    }
}

export const worldController = new WorldController();
