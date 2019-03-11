const express = require('express');

const configMiddleware = require('./middleware');

const server = express();

configMiddleware(server);

server.get('/', (req, res) => res.status(200).send('Working so far'));

module.exports = server;