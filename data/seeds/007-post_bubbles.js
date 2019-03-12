
exports.seed = function(knex, Promise) {
      return knex('post_bubbles').insert([
        {post_id: 1, bubble_id: 1},
        {post_id: 2, bubble_id: 1},
        {post_id: 3, bubble_id: 1},
        {post_id: 4, bubble_id: 3},
        {post_id: 5, bubble_id: 3},
        {post_id: 6, bubble_id: 3},
        {post_id: 6, bubble_id: 2},
        {post_id: 7, bubble_id: 5},
        {post_id: 8, bubble_id: 4},
        {ipost_id: 9, bubble_id: 6},
      ]);
};
