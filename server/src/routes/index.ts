import { Router } from 'express';

import playerRouter from './player.routes';
import characterRouter from './character.routes';

const routes = Router();

routes.use('/player', playerRouter);
routes.use('/character', characterRouter);

export default routes;
