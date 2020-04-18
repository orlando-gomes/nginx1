import { Router } from 'express';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

import 'dotenv/config';

const routs = new Router();

routs.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routs.use((req, res) => {
  return res.json(req);
})

routs.get(
  `${process.env.NODE_ENV === 'production' ? process.env.MS : ''}/`,
  (req, res) => {
    return res.json({ msg: 'Hello world nginx1' });
  }
);

routs.get(
  `${process.env.NODE_ENV === 'production' ? process.env.MS : ''}/users`,
  (req, res) => {
    return res.json({ msg: 'get users nginx1' });
  }
);

export default routs;
