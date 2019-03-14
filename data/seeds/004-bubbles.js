
exports.seed = async (knex, Promise) => {
      await knex('bubbles').insert([
        {bubble: 'Memes'}, //1
        {bubble: 'Video Games'}, //2
        {bubble: 'Dogs'}, //3
        {bubble: 'Magic'}, //4
        {bubble: 'Brooms'}, //5
        {bubble: 'Trolls'}, //6
        {bubble: 'Squidward'}, //7
        {bubble: 'Driving'}, //8
        {bubble: 'Working'}, //9
        {bubble: 'Coding'}, //10
        {bubble: 'React js'}, //11
        {bubble: 'Node js'}, //12
        {bubble: 'My Leg'}
      ]);

      return await knex.raw('select setval(\'bubbles_id_seq\', max(id)) from bubbles');
};
