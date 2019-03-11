
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_bubbles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_bubbles').insert([
        {id: 1, student_id: 1, bubble_id: 1},
        {id: 2, student_id: 2, bubble_id: 1},
        {id: 3, student_id: 2, bubble_id: 3}
      ]);
    });
};
