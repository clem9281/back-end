
exports.seed = async (knex, Promise) => {
      await knex('post_comments').insert([
        {user_id: 2, post_id: 1, comment: 'Very funny kiddo'},
        {user_id: 2, post_id: 2, comment: 'I had no idea'},
        {user_id: 1, post_id: 3, comment: 'hey, this is another post!'},
        {user_id: 1, post_id: 4, comment: 'It\'s true they are!'},
        {user_id: 1, post_id: 5, comment: 'Yes they are.'},
        {user_id: 1, post_id: 6, comment: 'Yeah man!'},
        {user_id: 4, post_id: 7, comment: 'Keep better track of your stuff harry.'},
        {user_id: 5, post_id: 7, comment: 'I think I saw it outside.'},
        {user_id: 5, post_id: 8, comment: 'I just saw you do sick magic though?'},
        {user_id: 4, post_id: 8, comment: 'I have a book titled magic, that might help'},
        {user_id: 4, post_id: 9, comment: 'I was there!'},
        {user_id: 5, post_id: 9, comment: 'I think so.'},
        {user_id: 3, post_id: 10, comment: 'I recently read, "Sick Magic", was a pretty sick book'},
        {user_id: 5, post_id: 10, comment: 'I don\'t read books.'},
        {user_id: 5, post_id: 11, comment: 'Crazy...'},
        {user_id: 3, post_id: 12, comment: 'Yeah it\'s pretty neat indeed'},
        {user_id: 5, post_id: 12, comment: 'Mine hit me in the face...'},
        {user_id: 3, post_id: 13, comment: 'Oh man you were there, that was pretty sick huh'},
        {user_id: 4, post_id: 13, comment: 'It\'s only because I gave him my sick magic book'},
        {user_id: 4, post_id: 14, comment: 'Haha classic ron'},
        {user_id: 3, post_id: 14, comment: 'Agreed, classic ron'},
        {user_id: 4, post_id: 15, comment: 'You\'re not gonna learn anything by copying someones hw'},
        {user_id: 7, post_id: 16, comment: 'What time is it spongebob?'},
        {user_id: 7, post_id: 17, comment: 'I don\'t work anywhere spongebob'},
        {user_id: 7, post_id: 18, comment: 'Good Luck Spongebob, also I can\'t find my house.'},
        {user_id: 6, post_id: 19, comment: 'Yes patrick, I\'m right here'},
        {user_id: 6, post_id: 20, comment: 'No patrick remember, squidward doesn\'t like social media'},
        {user_id: 6, post_id: 21, comment: 'Patrick I see you outside of squidwards house right now'},
        {user_id: 8, post_id: 22, comment: 'MY LEG'},
        {user_id: 8, post_id: 23, comment: 'MY LEG'},
        {user_id: 8, post_id: 24, comment: 'MY LEG'},
      ]);

      return await knex.raw('select setval(\'post_comments_id_seq\', max(id)) from post_comments');
};
