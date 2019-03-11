
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_bubbles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_bubbles').insert([
        {student_id: 1, bubble_id: 1},
        {student_id: 2, bubble_id: 1},
        {student_id: 2, bubble_id: 3}
      ]);
    });
};
