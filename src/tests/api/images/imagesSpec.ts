// apiSpec.ts
// Jasmine tests for the index.ts source file

import supertest from 'supertest';

// Where app is an Express server object
import app from '../../../index';

const request = supertest(app);

describe('Test /api/images endpoint', () => {
  it('gets the /api/images endpoint', async done => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    done();
  });
});
