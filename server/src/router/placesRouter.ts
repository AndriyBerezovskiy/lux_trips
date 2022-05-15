import { Router } from 'express';
import { placesController } from '../controller/placesController';

const router = Router();

router.get('/', placesController.getPlaces);
router.post('/', placesController.createPlaces);

export const placesRouter = router;
