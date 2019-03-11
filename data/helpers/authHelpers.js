const db = require('../dbConfig');

module.exports = {
  findBy,
  add
}

function findBy(filter) {
  return db('user_profiles').where(filter).first();
}

function add(user) {
  return db('user_profiles').insert(user);
}