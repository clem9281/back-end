
exports.seed = async (knex, Promise) => {
      // Inserts seed entries
      await knex('schools').insert([
        {id: 1, name: 'Lambda'},
        {id: 2, name: 'Hogwarts'}
      ]);

      return await knex.raw('select setval(\'schools_id_seq\'), max(id)) from schools');
};
