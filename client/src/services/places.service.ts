import { axiosService } from './axios.service';

import { urls } from '../config/urls';

export const placesService = {
    getAllPlaces: () => axiosService.get(urls.places).then((value) => value.data),
};
