// api.ts

// API endpoint that lists the available API tools

import express from 'express';
import imagesRoutes from './images/images';

const routes = express.Router();

routes.get('/', (req, res): void => {
  res.send(
    'API Table of Contents <br/> Visit /api/images to use the image resizing API tool.'
  );
});

routes.use('/images', imagesRoutes);

export default routes;
