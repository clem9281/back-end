
exports.seed = async (knex, Promise) => {
      // Inserts seed entries
      await knex('schools').insert([
        {name: 'Lambda'},
        {name: 'Hogwarts'},
        {name: 'Mrs. Puff\'s Boating School'}
      ]);

      return await knex.raw('select setval(\'schools_id_seq\', max(id)) from schools');
};
