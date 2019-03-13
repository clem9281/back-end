
exports.seed = async (knex, Promise) => {
      await knex('post_bubbles').insert([
        {post_id: 1, bubble_id: 1},
        {post_id: 2, bubble_id: 1},
        {post_id: 3, bubble_id: 1},
        {post_id: 4, bubble_id: 3},
        {post_id: 5, bubble_id: 3},
        {post_id: 6, bubble_id: 3},
        {post_id: 6, bubble_id: 2},
        {post_id: 7, bubble_id: 5},
        {post_id: 8, bubble_id: 4},
        {post_id: 9, bubble_id: 6},
      ]);

      return await knex.raw('select setval(\'post_bubbles_id_seq\', max(id)) from post_bubbles');
};
