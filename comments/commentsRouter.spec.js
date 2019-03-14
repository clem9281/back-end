const request = require('supertest');

const server = require('../api/server');
const db = require('../data/dbConfig');

describe('commentsRouter.js', () => {
  let token = '';
  beforeAll(async () => {
    await request(server).post('/auth/register').send({name: 'Mr Krabs', username: 'mkrabs', password: 'pass', school_id: 1});
    const user = await request(server).post('/auth/login').send({username: 'mkrabs', password: 'pass'});
    token = user.body.token;
  });
  afterEach(async () => {
    await db('post_comments').truncate();
    await db('posts').truncate();
  })
  afterAll(async () => {
    db('posts').truncate();
  })

  describe('POST /', () => {
    it('should return 201 on successful comment creation', async () => {
      await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
      const res = await request(server).post('/api/comments/').send({comment: 'test comment', post_id: 1}).set('Authorization', token);
      expect(res.status).toBe(201);
    });
    it('should return 400 on incomplete comment request', async () => {
      await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
      const res = await request(server).post('/api/comments/').send({post_id: 1}).set('Authorization', token);
      expect(res.status).toBe(400);
    });
    it('should return JSON successful comment creation', async () => {
      await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
      const res = await request(server).post('/api/comments/').send({comment: 'test comment', post_id: 1}).set('Authorization', token);
      expect(res.type).toBe('application/json');
    });
  });

  describe('DELETE /', () => {
    beforeEach(async () => {
      await request(server).post('/api/posts').send({user_id: 1, post_content: 'Test', bubbles: [1]}).set('Authorization', token);
      await request(server).post('/api/comments/').send({comment: 'test comment', post_id: 1}).set('Authorization', token);
    })
    it('should return 204 status on delete', async () => {
      const res = await request(server).delete('/api/comments/1').set('Authorization', token);
      expect(res.status).toBe(204);
    });
    it('should return 404 status on invalid comment id', async () => {
      const res = await request(server).delete('/api/comments/100').set('Authorization', token);
      expect(res.status).toBe(404);
    });
  });
});