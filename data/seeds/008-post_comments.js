
exports.seed = function(knex, Promise) {
      return knex('post_comments').insert([
        {id: 1, user_id: 2, post_id: 1, comment: 'Very funny kiddo'},
        {id: 2, user_id: 3, post_id: 2, comment: 'Yes they are'},
        {id: 3, user_id: 1, post_id: 3, comment: 'No sir'}
      ]);
};
