
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bubbles').del()
    .then(function () {
      // Inserts seed entries
      return knex('bubbles').insert([
        {id: 1, bubble: 'Memes'},
        {id: 2, bubble: 'Video Games'},
        {id: 3, bubble: 'Dogs'}
      ]);
    });
};
