import { axiosService } from './axios.service';

import { urls } from '../config/urls';

export const tourService = {
    getAllTours: () => axiosService.get(urls.tours).then((value) => value.data),
};
