// apiSpec.ts
// Jasmine tests for the index.ts source file

import supertest from 'supertest';

// Where app is an Express server object
import app from'../../index'; 

const request = supertest(app); 

describe('Test /api endpoint', () => {
    it('gets the /api endpoint', async(done) => {
        const response = await request.get('/api');         
        expect(response.status).toBe(200);         
        done();     
    })
});