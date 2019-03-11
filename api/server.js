const express = require('express');

const configMiddleware = require('./middleware');
const authRouter = require('../auth/authRouter');
const postsRouter = require('../posts/postsRouter');

const server = express();

configMiddleware(server);
server.use('/auth', authRouter);
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => res.status(200).send('Working so far'));

module.exports = server;