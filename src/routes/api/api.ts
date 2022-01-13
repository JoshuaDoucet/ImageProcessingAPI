import express from 'express';
import imagesRoutes from './images/images';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Main API route visited');
});

routes.use('/images', imagesRoutes);

export default routes;
