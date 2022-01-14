// indexSpec.ts
// Jasmine tests for the index.ts source file

import supertest from 'supertest';

// Where app is an Express server object
import app from '../index';

const request = supertest(app);

describe('Test root endpoint', (): void => {
  it('gets the root endpoint', async done => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
});
