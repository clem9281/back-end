const db = require('../dbConfig');

module.exports = {
  get,
  joinBubble,
  leaveBubble
}

function get(id) {
  console.log('hey');
  return db.select('u.id', 'u.username', 'u.name', 'u.bio', 'u.picture').from('user_profiles as u').where({id}).first()
    .then(async user => {
      const bubbles = await db.select('b.id', 'b.bubble').from('user_bubbles as ub').innerJoin('bubbles as b', 'ub.bubble_id', 'b.id').where({'ub.student_id': id});
      return {
        ...user,
        bubbles
      }
    })
}

function joinBubble(bubble) {
  return db('user_bubbles').insert(bubble);
}

function leaveBubble(id) {
  return db('user_bubbles').where({id}).del();
}