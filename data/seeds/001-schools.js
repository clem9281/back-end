
exports.seed = async (knex, Promise) => {
      // Inserts seed entries
      await knex('schools').insert([
        {name: 'Lambda'},
        {name: 'Hogwarts'}
      ]);

      return await knex.raw('select setval(\'schools_id_seq\', max(id)) from schools');
};
