// apiSpec.ts
// Jasmine tests for the index.ts source file

import supertest from 'supertest';

// Where app is an Express server object
import app from '../../../index';

const request = supertest(app);

describe('GET /api/images endpoint', () => {
  it('gets the /api/images endpoint', async done => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    done();
  });
  it('requests an EXISTING image file and gets a response type of an image file', async done => {
    const response = await request.get(
      '/api/images?jpgname=fjord&width=500&height=200'
    );
    expect(response.status).toBe(200);
    expect(response.type).toBe('image/jpeg');
    done();
  });
  it('requests an NON-EXISTING image file and gets a response with type NOT of an image file', async done => {
    const response = await request.get(
      '/api/images?jpgname=non-existing-image&width=500&height=200'
    );
    expect(response.status).toBe(200);
    expect(response.type).not.toBe('image/jpeg');
    done();
  });
});
