
exports.seed = async (knex, Promise) => {
      await knex('post_comments').insert([
        {id: 1, user_id: 2, post_id: 1, comment: 'Very funny kiddo'},
        {id: 2, user_id: 3, post_id: 2, comment: 'Yes they are'},
        {id: 3, user_id: 1, post_id: 3, comment: 'No sir'}
      ]);

      return await knex.raw('select setval(\'post_comments_id_seq\', max(id)) from post_comments');
};
