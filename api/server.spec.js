const request = require('supertest');
const server = require('./server');

describe('Server.js', () => {
  describe('GET /', () => {
    it('should return json', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('text/html');
    });

    it('should have 200 status code', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
  });
});