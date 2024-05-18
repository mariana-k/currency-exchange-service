const request = require('supertest');
const app = require('../src/app');

describe('GET /api/rates', () => {
  it('should return the current exchange rate', async () => {
    const res = await request(app).get('/api/rates');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('rate');
  });
});
