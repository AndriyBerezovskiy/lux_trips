import { Router } from 'express';

import { tourRouter } from './tourRouter';
import { countryRouter } from './countryRouter';
import { typeRouter } from './typeRouter';
import { worldRouter } from './worldRouter';
import { placesRouter } from './placesRouter';

const router = Router();

router.use('/tour', tourRouter);
router.use('/tour/world', worldRouter);
router.use('/tour/country', countryRouter);
router.use('/tour/type', typeRouter);
router.use('/tour/places', placesRouter);

export const apiRouter = router;
