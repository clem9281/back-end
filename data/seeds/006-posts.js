
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, post_content: 'Spaghetti and meatballs', likes: 0},
        {user_id: 2, post_content: 'Dogs are great', likes: 0},
        {user_id: 3, post_content: 'Anyone ever hear of WoW?', likes: 0}
      ]);
    });
};
