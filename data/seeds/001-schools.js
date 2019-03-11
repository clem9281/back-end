
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('schools').insert([
        {id: 1, name: 'Lambda'},
        {id: 2, name: 'Hogwarts'}
      ]);
};
