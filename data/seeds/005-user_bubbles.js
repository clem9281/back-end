
exports.seed = async (knex, Promise) => {
      await knex('user_bubbles').insert([
        {student_id: 1, bubble_id: 1},
        {student_id: 1, bubble_id: 2},
        {student_id: 1, bubble_id: 10},
        {student_id: 2, bubble_id: 3},
        {student_id: 2, bubble_id: 10},
        {student_id: 3, bubble_id: 4},
        {student_id: 3, bubble_id: 5},
        {student_id: 3, bubble_id: 6},
        {student_id: 4, bubble_id: 6},
        {student_id: 5, bubble_id: 4},
        {student_id: 6, bubble_id: 8},
        {student_id: 7, bubble_id: 7},
        {student_id: 8, bubble_id: 8},
        {student_id: 6, bubble_id: 9},
      ]);

      return await knex.raw('select setval(\'user_bubbles_id_seq\', max(id)) from user_bubbles');
};
