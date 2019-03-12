
exports.seed = function(knex, Promise) {
      return knex('user_bubbles').insert([
        {id: 1, student_id: 1, bubble_id: 1},
        {id: 2, student_id: 1, bubble_id: 2},
        {id: 3, student_id: 2, bubble_id: 1},
        {id: 4, student_id: 2, bubble_id: 3},
        {id: 5, student_id: 3, bubble_id: 4},
        {id: 6, student_id: 3, bubble_id: 5},
        {id: 7, student_id: 3, bubble_id: 6},
      ]);
};
