import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Images API route visited');
});

export default routes;
