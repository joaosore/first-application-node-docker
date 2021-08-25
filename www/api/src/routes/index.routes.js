import { Router } from 'express';

import ConfigUploadAndCors from './ConfigUploadAndCors';

import Home from './Home';
import User from './User';
import Session from './Session';

const routes = new Router();

routes.use(ConfigUploadAndCors);

routes.use('/', Home);

routes.use('/sessions', Session);

routes.use('/users', User);

export default routes;
