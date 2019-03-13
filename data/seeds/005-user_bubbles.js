
exports.seed = async (knex, Promise) => {
      await knex('user_bubbles').insert([
        {student_id: 1, bubble_id: 1},
        {student_id: 1, bubble_id: 2},
        {student_id: 2, bubble_id: 1},
        {student_id: 2, bubble_id: 3},
        {student_id: 3, bubble_id: 4},
        {student_id: 3, bubble_id: 5},
        {student_id: 3, bubble_id: 6},
      ]);

      return await knex.raw('select setval(\'user_bubbles_id_seq\', max(id)) from user_bubbles');
};
