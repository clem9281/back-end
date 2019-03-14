const request = require('supertest');

const server = require('../api/server');
const db = require('../data/dbConfig');

describe('authRouter.js', () => {
  describe('POST /register', () => {
    afterEach(async () => {
      await db('user_profiles').truncate();
    })
    it('should send back a message on successful register', async () => {
      const res = await request(server).post('/auth/register').send({name: 'spongebob', username: 'sbob', password: 'pass', school_id: 1});
      expect(res.body).toEqual({message: 'Successfully signed up!'});
    });
    it('should send back 201 status code on successful register', async () => {
      const res = await request(server).post('/auth/register').send({name: 'spongebob', username: 'sbob', password: 'pass', school_id: 1});
      expect(res.status).toBe(201);
    });
    it('should send back a message on bad request', async () => {
      const res = await request(server).post('/auth/register').send({name: 'spongebob', username: 'sbob', school_id: 1});
      expect(res.body).toEqual({message: 'Please provide your name, a username, password and a valid school ID'});
    });
    it('should send back 400 status code on bad request', async () => {
      const res = await request(server).post('/auth/register').send({name: 'spongebob', username: 'sbob'});
      expect(res.status).toBe(400);
    });
  });

  describe('POST /login', () => {
    beforeAll(async () => {
      await request(server).post('/auth/register').send({name: 'spongebob', username: 'sbob', password: 'pass', school_id: 1});
    });
    afterAll(async () => {
      await db('user_profiles').truncate();
    })
    it('should send back a 200 status code on successful login', async () => {
      const res = await request(server).post('/auth/login').send({username: 'sbob', password: 'pass'});
      expect(res.status).toBe(200);
    });
    it('should send back 200 status on successful login', async () => {
      const res = await request(server).post('/auth/login').send({username: 'sbob', password: 'pass'});
      expect(res.status).toBe(200);
    });
    it('should send back a token on successful login', async () => {
      const res = await request(server).post('/auth/login').send({username: 'sbob', password: 'pass'});
      expect(res.body.token).toBeDefined();
    });
    it('should send back 401 status code on bad request', async () => {
      const res = await request(server).post('/auth/login').send({ username: 'sbob', password: 'passs'});
      expect(res.status).toBe(401);
    });
  });
});