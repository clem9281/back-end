
exports.seed = async (knex, Promise) => {
      await knex('posts').insert([
        {user_id: 1, post_content: 'Spaghetti and meatballs', likes: 0},
        {user_id: 1, post_content: 'I am Nick did you guys know?', likes: 0},
        {user_id: 1, post_content: 'Here is another post', likes: 0},
        {user_id: 2, post_content: 'Dogs are great', likes: 0},
        {user_id: 2, post_content: 'Dogs really are great', likes: 0},
        {user_id: 2, post_content: 'Dogs are really great', likes: 0},
        {user_id: 3, post_content: 'Anyone see my broom?', likes: 0},
        {user_id: 3, post_content: 'Anyone know how to do some magic?', likes: 0},
        {user_id: 3, post_content: 'Anyone hear about the troll in the bathroom?', likes: 0},
        {user_id: 4, post_content: 'Anyone read any good magic books recently?', likes: 0},
        {user_id: 4, post_content: 'I just saw a troll in the bathroom!', likes: 0},
        {user_id: 4, post_content: 'Flying on brooms is cool!', likes: 0},
        {user_id: 5, post_content: 'I just saw harry do some sick magic.', likes: 0},
        {user_id: 5, post_content: 'I just got hit in the face by my broom.', likes: 0},
        {user_id: 5, post_content: 'Anyone know how to do the magic homework?', likes: 0},
        {user_id: 6, post_content: 'Guess what time it is? it\'s time for work!', likes: 0},
        {user_id: 6, post_content: 'Go to work. Go to work. Go to work. Go to work. Go to work.', likes: 0},
        {user_id: 6, post_content: 'I know todays the day I\'ll get my boating license', likes: 0},
        {user_id: 7, post_content: 'Spongebob? Hello? are you in here?', likes: 0},
        {user_id: 7, post_content: 'Squidward, you\'re in here too?!?', likes: 0},
        {user_id: 7, post_content: 'I can\'t find squidwards house', likes: 0},
        {user_id: 8, post_content: 'Ow my leg', likes: 0},
        {user_id: 8, post_content: 'OUCH MY LEG', likes: 0},
        {user_id: 8, post_content: 'MY LEG', likes: 0},
      ]);

      return await knex.raw('select setval(\'posts_id_seq\', max(id)) from posts');
};
