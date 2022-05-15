import { EntityRepository, getManager, Repository } from 'typeorm';
import { IWorld, World } from '../../entity/World';

@EntityRepository(World)
class WorldRepository extends Repository<World> {
    public async createWorld(world: IWorld):Promise<IWorld> {
        return getManager().getRepository(World).save(world);
    }

    public async getWorld():Promise<IWorld[]> {
        return getManager().getRepository(World).find();
    }
}

export const worldRepository = new WorldRepository();
