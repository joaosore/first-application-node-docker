import { Router } from 'express';

const cors = require('cors');

const fileUpload = require('express-fileupload');

const routes = new Router();

routes.use(fileUpload());

routes.use(cors());

routes.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

export default routes;
