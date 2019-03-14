
exports.seed = async (knex, Promise) => {
      await knex('post_bubbles').insert([
        {post_id: 1, bubble_id: 1},
        {post_id: 2, bubble_id: 1},
        {post_id: 3, bubble_id: 1},
        {post_id: 4, bubble_id: 3},
        {post_id: 5, bubble_id: 3},
        {post_id: 6, bubble_id: 3},
        {post_id: 7, bubble_id: 5},
        {post_id: 8, bubble_id: 4},
        {post_id: 9, bubble_id: 6},
        {post_id: 10, bubble_id: 4},
        {post_id: 11, bubble_id: 6},
        {post_id: 12, bubble_id: 5},
        {post_id: 13, bubble_id: 4},
        {post_id: 14, bubble_id: 5},
        {post_id: 15, bubble_id: 4},
        {post_id: 16, bubble_id: 9},
        {post_id: 17, bubble_id: 9},
        {post_id: 18, bubble_id: 8},
        {post_id: 19, bubble_id: 7},
        {post_id: 20, bubble_id: 7},
        {post_id: 21, bubble_id: 7},
        {post_id: 22, bubble_id: 13},
        {post_id: 23, bubble_id: 13},
        {post_id: 24, bubble_id: 13}
      ]);

      return await knex.raw('select setval(\'post_bubbles_id_seq\', max(id)) from post_bubbles');
};
