import { IWorld } from '../entity/World';
import { worldRepository } from '../repositories/world/worldRepository';

class WorldService {
    public async createWorld(world: IWorld):Promise<IWorld> {
        return worldRepository.createWorld(world);
    }

    public async getWorld():Promise<IWorld[]> {
        return worldRepository.getWorld();
    }
}

export const worldService = new WorldService();
