const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profiles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {id: 1, school_id: 1, name: 'Nick Batmanglidj', username: 'Nbatman', bio: 'It me.', password: bcrypt.hashSync('pass', 12)},
        {id: 2, school_id: 1, name: 'Clint Kunz', username: 'Ckunz', bio: 'It also me guys.', password: bcrypt.hashSync('pass', 12)},
        {id: 3, school_id: 2, name: 'Harry Potter', username: 'Hpotter', bio: 'Where are we ron?', password: bcrypt.hashSync('pass', 12)}
      ]);
    });
};
