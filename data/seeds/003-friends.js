
exports.seed = async (knex, Promise) => {
      await knex('friends').insert([
        {user_id: 1, friend_id: 2},
        {user_id: 1, friend_id: 3},
        {user_id: 2, friend_id: 3}
      ]);

      return await knex.raw('select setval(\'friends_id_seq\', max(id)) from friends');
};
