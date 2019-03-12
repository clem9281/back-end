const db = require('../dbConfig');

module.exports = {
  getUserPosts,
  getFilteredPosts,
  deletePost,
}

function get(id) {
  db('posts').where({id}).first();
}

function getUserPosts(id) {
    return db('posts').where({user_id: id});
}

function getFilteredPosts(schoolID, id) {
  return db.select('p.id', 'u.name', 'p.post_content', 'p.likes', 'p.created_at').from('posts as p')
  .innerJoin('user_profiles as u', 'p.user_id', 'u.id').where({'u.school_id': schoolID})
  .innerJoin('post_bubbles as pb', 'pb.post_id', 'p.id')
  .where({'pb.bubble_id': id})
  .then(posts => {
    return posts.map(async post => {
      const bubbles = await db.select('b.id', 'b.bubble', 'b.created_at').from('bubbles as b').innerJoin('post_bubbles as pb', 'pb.bubble_id', 'b.id').where({'pb.post_id': post.id})
      return {...post, bubbles: bubbles} 
    })
  })
  .catch(err => console.log(err));
}

function deletePost(id) {
  return db('posts').where({id}).del();
}