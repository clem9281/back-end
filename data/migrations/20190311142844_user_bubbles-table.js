
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_bubbles', t => {
    t.increments();

    t.integer('student_id')
    .unsigned()
    .references('id')
    .inTable('user_profiles')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    t.integer('bubble_id')
    .unsigned()
    .references('id')
    .inTable('bubbles')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_bubbles');
};
