
exports.seed = function(knex, Promise) {
      return knex('bubbles').insert([
        {id: 1, bubble: 'Memes'},
        {id: 2, bubble: 'Video Games'},
        {id: 3, bubble: 'Dogs'}
      ]);
};
