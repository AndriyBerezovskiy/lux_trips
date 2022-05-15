import { EntityRepository, getManager, Repository } from 'typeorm';
import { IPlaces, Places } from '../../entity/Places';

@EntityRepository(Places)
export class PlacesRepository extends Repository<Places> {
    public async createPlaces(place: IPlaces):Promise<IPlaces> {
        return getManager().getRepository(Places).save(place);
    }

    public async getPlaces():Promise<IPlaces[]> {
        return getManager().getRepository(Places).find({ relations: ['tours'] });
    }
}

export const placesRepository = new PlacesRepository();
