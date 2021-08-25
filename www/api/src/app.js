import express from 'express';
import routes from './routes/index.routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json({ limit: '50mb', extended: true }));
    this.server.use(express.urlencoded({ limit: '50mb', extended: true }));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
