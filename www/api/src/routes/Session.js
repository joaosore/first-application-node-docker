import { Router } from 'express';

import SessionController from '../app/controllers/SessionController';

const routes = new Router();

// Rotas
routes.get('/', SessionController.index);
routes.post('/', SessionController.store);

export default routes;
