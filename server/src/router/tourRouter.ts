import { Router } from 'express';

import { tourController } from '../controller/tourController';

const router = Router();

router.get('/', tourController.getTour);
router.post('/', tourController.createTour);

export const tourRouter = router;
