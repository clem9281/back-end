
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bubbles', t => {
    t.increments();
    t.string('bubble', 128);
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bubbles');
};
