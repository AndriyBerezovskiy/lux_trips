import {
    EntityRepository, getManager, Repository,
} from 'typeorm';

import { ITour, Tour } from '../../entity/Tours';

@EntityRepository(Tour)
class TourRepository extends Repository<Tour> {
    public async createTour(tour: ITour):Promise<ITour> {
        return getManager().getRepository(Tour).save(tour);
    }

    public async getTours():Promise<ITour[]> {
        return getManager().getRepository(Tour).find({ relations: ['country'] });
    }
}

export const tourRepository = new TourRepository();
