import { Router } from 'express';
import { worldController } from '../controller/worldController';

const router = Router();

router.get('/', worldController.getWorld);
router.post('/', worldController.createWorld);

export const worldRouter = router;
