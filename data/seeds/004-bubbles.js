
exports.seed = async (knex, Promise) => {
      await knex('bubbles').insert([
        {bubble: 'Memes'},
        {bubble: 'Video Games'},
        {bubble: 'Dogs'},
        {bubble: 'Magic'},
        {bubble: 'Brooms'},
        {bubble: 'Trolls'},
      ]);

      return await knex.raw('select setval(\'bubbles_id_seq\', max(id)) from bubbles');
};
