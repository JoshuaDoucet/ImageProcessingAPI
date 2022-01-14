// index.ts
// Application entry point. This is where the Express server is started

import express from 'express';
// get server routes
import routes from './routes/index';

// Express server application object
const app = express();
// Port for application server
const port = 3000;

// Link routes to server
app.use('/', routes);
// link static assets to server
app.use(express.static('public'));

// listen on port
app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});

export default app;
