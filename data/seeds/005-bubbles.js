
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bubbles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bubbles').insert([
        {bubble: 'Memes'},
        {bubble: 'Video Games'},
        {bubble: 'Dogs'}
      ]);
    });
};
