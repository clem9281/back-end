const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profiles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {school_id: 0, name: 'Nick Batmanglidj', username: 'Nbatman', bio: 'It me.', password: bcrypt.hashSync('pass', 12)},
        {school_id: 0, name: 'Clint Kunz', username: 'Ckunz', bio: 'It also me guys.', password: bcrypt.hashSync('pass', 12)},
        {school_id: 1, name: 'Harry Potter', username: 'Hpotter', bio: 'Where are we ron?', password: bcrypt.hashSync('pass', 12)}
      ]);
    });
};
