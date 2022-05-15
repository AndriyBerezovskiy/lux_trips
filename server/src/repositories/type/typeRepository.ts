import {
    EntityRepository, getManager, Repository,
} from 'typeorm';

import { IType, TypeTour } from '../../entity/TypeTour';

@EntityRepository(TypeTour)
class TypeRepository extends Repository<TypeTour> {
    public async createType(type: IType):Promise<IType> {
        return getManager().getRepository(TypeTour).save(type);
    }

    public async getType():Promise<IType[]> {
        return getManager().getRepository(TypeTour).find();
    }
}

export const typeRepository = new TypeRepository();
