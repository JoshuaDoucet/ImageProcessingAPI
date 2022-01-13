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

// listen on port
app.listen(port, () => {
    console.log(`Server started at localhost:${port}`); 
});

export default app;

//-----------------------------------------------
//Debug for pretty and ESLint

/*
console.log('Hello')
const studentName = "Josh"

//DEBUG for Jasmine test
const printAndUpper = (msg: string): string => {
    console.log(msg);
    return msg.toUpperCase();
};

export default {
    printAndUpper
};
*/
