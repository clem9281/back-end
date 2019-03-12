
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('schools').insert([
        {name: 'Lambda'},
        {name: 'Hogwarts'}
      ]);
};
