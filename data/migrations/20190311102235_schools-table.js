
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schools', t => {
    t.increments();
    t.string('name', 128).notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schools');
};
