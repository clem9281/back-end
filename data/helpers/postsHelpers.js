const db = require('../dbConfig');

module.exports = {
  getUserPosts,
  getSchoolsPosts,
  deletePost,
  get
}

function get(id) {
  db('posts').where({id}).first();
}

function getUserPosts(id) {
    return db('posts').where({user_id: id});
}

function getSchoolsPosts(id) {
  return db.select('u.name', 'p.post_content', 'p.likes', 'p.created_at').from('posts as p')
  .innerJoin('user_profiles as u', 'p.user_id', 'u.id').where({'u.school_id': id});
}

function deletePost(id) {
  return db('posts').where({id}).del();
}