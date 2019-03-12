
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schools_bubbles', t => {
    t.increments();
    t.integer('school_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('schools')
    .onDelete('CASCADE');

    t.integer('bubble_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('bubbles')
    .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schools_bubbles');
};
