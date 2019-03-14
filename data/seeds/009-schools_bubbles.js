
exports.seed = async (knex, Promise) => {
      // Inserts seed entries
      await knex('schools_bubbles').insert([
        {school_id: 1, bubble_id: 1},
        {school_id: 1, bubble_id: 2},
        {school_id: 1, bubble_id: 3},
        {school_id: 1, bubble_id: 9},
        {school_id: 1, bubble_id: 10},
        {school_id: 1, bubble_id: 11},
        {school_id: 1, bubble_id: 12},
        {school_id: 2, bubble_id: 4},
        {school_id: 2, bubble_id: 5},
        {school_id: 2, bubble_id: 6},
        {school_id: 3, bubble_id: 7},
        {school_id: 3, bubble_id: 8},
        {school_id: 3, bubble_id: 9},
        {school_id: 3, bubble_id: 13},
      ]);

      return await knex.raw('select setval(\'schools_id_seq\', max(id)) from schools');
};
