
exports.seed = function(knex, Promise) {
      return knex('posts').insert([
        {id: 1, user_id: 1, post_content: 'Spaghetti and meatballs', likes: 0},
        {id: 2, user_id: 2, post_content: 'Dogs are great', likes: 0},
        {id: 3, user_id: 3, post_content: 'Anyone ever hear of WoW?', likes: 0}
      ]);
};
