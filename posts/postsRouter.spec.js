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
  describe('POST /', () => {
    afterEach(async () => {
      await db('posts').truncate();
    });
    it('should return a 201 status code on successful creation', async () => {
      const res = await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
      expect(res.status).toBe(201);
    });
    it('should return a 400 status code on incomplete request', async () => {
      const res = await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test'}).set('Authorization', token);
      expect(res.status).toBe(400);
    });
    it('should return JSON', async () => {
      const res = await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
      expect(res.type).toBe('application/json');
    });
    it('should return JSON on bad request', async () => {
      const res = await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test'}).set('Authorization', token);
      expect(res.type).toBe('application/json');
    });
  });
  describe('DELETE /', () => {
    beforeEach(async () => {
      await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
    })
    afterEach(async () => {
      await db('posts').truncate();
    });
    it('should return 204 status code on successful delete', async () => {
      const res = await request(server).delete('/api/posts/1').set('Authorization', token);
      expect(res.status).toBe(204);
    });
    it('should return 404 status code when it doensnt find a post to delete', async () => {
      const res = await request(server).delete('/api/posts/100').set('Authorization', token);
      expect(res.status).toBe(404);
    });
  });
});