const db = require('../dbConfig');

module.exports = {
  get
}

function get(id) {
  if(id !== undefined) {
    return db('schools').where({id}).first();
  } else {
    return db('schools');
  }
}