
exports.seed = function(knex, Promise) {
      return knex('friends').insert([
        {id: 1, user_id: 1, friend_id: 2},
        {id: 2, user_id: 1, friend_id: 3},
        {id: 3, user_id: 2, friend_id: 3}
      ]);
};
