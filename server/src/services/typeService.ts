import { IType } from '../entity/TypeTour';
import { typeRepository } from '../repositories/type/typeRepository';

class TypeService {
    public async createTour(type: IType):Promise<IType> {
        return typeRepository.createType(type);
    }

    public async types(): Promise<IType[]> {
        return typeRepository.getType();
    }
}

export const typeService = new TypeService();
