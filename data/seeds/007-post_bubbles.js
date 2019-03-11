
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_bubbles').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_bubbles').insert([
        {id: 1, post_id: 1, bubble_id: 1},
        {id: 2, post_id: 2, bubble_id: 3},
        {id: 3, post_id: 3, bubble_id: 2}
      ]);
    });
};
