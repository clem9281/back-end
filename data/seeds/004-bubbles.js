
exports.seed = async (knex, Promise) => {
      await knex('bubbles').insert([
        {id: 1, bubble: 'Memes'},
        {id: 2, bubble: 'Video Games'},
        {id: 3, bubble: 'Dogs'},
        {id: 4, bubble: 'Magic'},
        {id: 5, bubble: 'Brooms'},
        {id: 6, bubble: 'Trolls'},
      ]);

      return await knex.raw('select setval(\'bubbles_id_seq\', max(id)) from bubbles');
};
