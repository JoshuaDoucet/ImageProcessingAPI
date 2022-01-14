// index.ts

// The root route endpoint for this applications express server

import express from 'express';
import apiRoutes from './api/api';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('API Homepage visited. Visit path /api to see available tools.');
});

routes.use('/api', apiRoutes);

export default routes;
