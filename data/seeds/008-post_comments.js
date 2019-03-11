
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('post_comments').insert([
        {user_id: 2, post_id: 1, comment: 'Very funny kiddo'},
        {user_id: 3, post_id: 2, comment: 'Yes they are'},
        {user_id: 1, post_id: 3, comment: 'No sir'}
      ]);
    });
};
