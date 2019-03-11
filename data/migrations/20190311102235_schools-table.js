
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schools', t => {
    t.increments();
    t.string('name', 128).notNullable().unique();
    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schools');
};
