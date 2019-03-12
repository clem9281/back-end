
exports.seed = function(knex, Promise) {
      return knex('posts').insert([
        {user_id: 1, post_content: 'Spaghetti and meatballs', likes: 0},
        {user_id: 1, post_content: 'I am Nick did you guys know?', likes: 0},
        {user_id: 1, post_content: 'Here is another post', likes: 0},
        {user_id: 2, post_content: 'Dogs are great', likes: 0},
        {user_id: 2, post_content: 'Dogs really are great', likes: 0},
        {user_id: 2, post_content: 'Dogs are really great', likes: 0},
        {user_id: 3, post_content: 'Anyone see my broom?', likes: 0},
        {user_id: 3, post_content: 'Anyone know how to do some magic?', likes: 0},
        {user_id: 3, post_content: 'Anyone hear about the troll in the bathroom?', likes: 0},
      ]);
};
