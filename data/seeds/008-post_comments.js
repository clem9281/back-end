
exports.seed = async (knex, Promise) => {
      await knex('post_comments').insert([
        {user_id: 2, post_id: 1, comment: 'Very funny kiddo'},
        {user_id: 3, post_id: 2, comment: 'Yes they are'},
        {user_id: 1, post_id: 3, comment: 'No sir'}
      ]);

      return await knex.raw('select setval(\'post_comments_id_seq\', max(id)) from post_comments');
};
