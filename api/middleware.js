const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

function configMiddleware(server) {
  server.use(express.json());
  server.use(morgan('dev'));
  server.use(cors());
  server.use(helmet());
}

module.exports = configMiddleware;