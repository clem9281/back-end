const request = require('supertest');

const server = require('../api/server');
const db = require('../data/dbConfig');

describe('postsRouter.js', () => {
  let token = '';
  beforeAll(async () => {
    await request(server).post('/auth/register').send({name: 'patrick star', username: 'pstar', password: 'pass', school_id: 1});
    const user = await request(server).post('/auth/login').send({username: 'pstar', password: 'pass'});
    token = user.body.token;
  });
  afterAll(async () => {
    await db('user_profiles').truncate();
  })
  describe('GET /', () => {
    it('should return status code 200', async () => {
      const res = await request(server).get('/api/posts').set('Authorization', token);
      expect(res.status).toBe(200);
    });
    it('should return JSON', async () => {
      const res = await request(server).get('/api/posts').set('Authorization', token);
      expect(res.type).toBe('application/json');
    });
    it('should return an array', async () => {
      const res = await request(server).get('/api/posts').set('Authorization', token);
      expect(res.body.length).toBeDefined();
    });
  });
  describe('GET /filter/:id', () => {
    it('should return status code 200', async () => {
      const res = await request(server).get('/api/posts/filter/1').set('Authorization', token);
      expect(res.status).toBe(200);
    });
    it('should return JSON', async () => {
      const res = await request(server).get('/api/posts/filter/1').set('Authorization', token);
      expect(res.type).toBe('application/json');
    });
    it('should return an array', async () => {
      const res = await request(server).get('/api/posts/filter/1').set('Authorization', token);
      expect(res.body.length).toBeDefined();
    });
  });
});