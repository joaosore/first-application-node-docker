import { Router } from 'express';

import authMiddleware from '../app/middlewares/auth';

import UserController from '../app/controllers/UserController';

const routes = new Router();

// Rotas de Usuário
routes.get('/', authMiddleware, UserController.index);
routes.post('/', UserController.store);
routes.put('/', authMiddleware, UserController.update);

export default routes;
