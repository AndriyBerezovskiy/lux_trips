import { Router } from 'express';

import { countryController } from '../controller/countryController';

const router = Router();

router.get('/', countryController.getCountry);
router.post('/', countryController.createCountry);

export const countryRouter = router;
