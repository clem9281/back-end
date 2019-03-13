
exports.seed = async (knex, Promise) => {
      await knex('posts').insert([
        {id: 1, user_id: 1, post_content: 'Spaghetti and meatballs', likes: 0},
        {id: 2, user_id: 1, post_content: 'I am Nick did you guys know?', likes: 0},
        {id: 3, user_id: 1, post_content: 'Here is another post', likes: 0},
        {id: 4, user_id: 2, post_content: 'Dogs are great', likes: 0},
        {id: 5, user_id: 2, post_content: 'Dogs really are great', likes: 0},
        {id: 6, user_id: 2, post_content: 'Dogs are really great', likes: 0},
        {id: 7, user_id: 3, post_content: 'Anyone see my broom?', likes: 0},
        {id: 8, user_id: 3, post_content: 'Anyone know how to do some magic?', likes: 0},
        {id: 9, user_id: 3, post_content: 'Anyone hear about the troll in the bathroom?', likes: 0},
      ]);

      return await knex.raw('select setval(\'posts_id_seq\', max(id)) from posts');
};
