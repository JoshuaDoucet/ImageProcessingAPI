import express from 'express';
import apiRoutes from './api/api';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Root route visited");
});

routes.use('/api', apiRoutes);

export default routes;