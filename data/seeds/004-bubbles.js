
exports.seed = function(knex, Promise) {
      return knex('bubbles').insert([
        {bubble: 'Memes'},
        {bubble: 'Video Games'},
        {bubble: 'Dogs'},
        {bubble: 'Magic'},
        {bubble: 'Brooms'},
        {bubble: 'Trolls'},
      ]);
};
