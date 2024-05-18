const request = require('supertest');
const app = require('../src/app');

describe('POST /api/subscription', () => {
  it('should subscribe a new email', async () => {
    const res = await request(app).post('/api/subscription').send({ email: 'test@example.com' });
    expect(res.statusCode).toEqual(201);
    expect(res.text).toBe('Subscribed successfully.');
  });
});
