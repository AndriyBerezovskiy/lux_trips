import { IPlaces } from '../entity/Places';
import { placesRepository } from '../repositories/places/placesRepository';

export class PlacesService {
    public async createPlaces(place: IPlaces):Promise<IPlaces> {
        return placesRepository.createPlaces(place);
    }

    public async places():Promise<IPlaces[]> {
        return placesRepository.getPlaces();
    }
}

export const placesService = new PlacesService();
