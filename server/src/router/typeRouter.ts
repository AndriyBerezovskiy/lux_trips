import { Router } from 'express';

import { typeController } from '../controller/typeController';

const router = Router();

router.get('/', typeController.getType);
router.post('/', typeController.createType);

export const typeRouter = router;
