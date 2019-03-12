
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('schools_bubbles').insert([
        {school_id: 1, bubble_id: 1},
        {school_id: 1, bubble_id: 2},
        {school_id: 1, bubble_id: 3},
        {school_id: 2, bubble_id: 4},
        {school_id: 2, bubble_id: 5},
        {school_id: 2, bubble_id: 6},
      ]);
};
