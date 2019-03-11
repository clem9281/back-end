const db = require('../dbConfig');

module.exports = {
  getUserPosts
}

function getUserPosts(id) {
    return db('posts').where({user_id: id});
}