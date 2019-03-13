const db = require('../dbConfig');

module.exports = {
  addComment
}

function addComment(comment) {
  return db('post_comments').returning('id').insert(comment)
    .then(id => {
      return db.select('pc.id', 'pc.user_id', 'u.name', 'pc.comment', 'pc.created_at').from('post_comments as pc')
      .innerJoin('user_profiles as u', 'pc.user_id', 'u.id').where({'pc.id': id[0]});
    })
}

