import { ITour } from '../entity/Tours';
import { tourRepository } from '../repositories/tour/tourRepository';

class TourService {
    public async createTour(tour: ITour):Promise<ITour> {
        return tourRepository.createTour(tour);
    }

    public async tours(): Promise<ITour[]> {
        return tourRepository.getTours();
    }
}

export const tourService = new TourService();
