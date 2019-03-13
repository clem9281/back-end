const db = require('../dbConfig');

module.exports = {
  get,
  joinBubble,
  leaveBubble
}

//id is school id here
function get(id) {
  return db.select('b.id', 'b.bubble', 'b.created_at').from('bubbles as b')
  .innerJoin('schools_bubbles as sb', 'sb.bubble_id', 'b.id')
  .where({'sb.school_id': id});
}

function joinBubble(bubble) {
  return db('user_bubbles').insert(bubble);
}

function leaveBubble(bubble_id, student_id) {
  return db('user_bubbles').where({bubble_id, student_id}).del();
}