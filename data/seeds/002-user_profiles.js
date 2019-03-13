const bcrypt = require('bcryptjs');

exports.seed = async (knex, Promise) => {
      // Inserts seed entries
      await knex('user_profiles').insert([
        {id: 1, school_id: 1, name: 'Nick Batmanglidj', username: 'Nbatman', bio: 'It me.', password: bcrypt.hashSync('pass', 12)},
        {id: 2, school_id: 1, name: 'Clint Kunz', username: 'Ckunz', bio: 'It also me guys.', password: bcrypt.hashSync('pass', 12)},
        {id: 3, school_id: 2, name: 'Harry Potter', username: 'Hpotter', bio: 'Where are we ron?', password: bcrypt.hashSync('pass', 12)}
      ]);
      
      return await knex.raw('select setval(\'user_profiles_id_seq\', max(id)) from user_profiles');
};
