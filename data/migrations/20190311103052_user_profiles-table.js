
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_profiles',  t => {
    t.increments();
    t.integer('school_id')
    .unsigned()
    .references('id')
    .inTable('schools')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
    t.string('name', 128).notNullable();
    t.string('username', 128).notNullable().unique();
    t.string('password');
    t.text('picture');
    t.text('bio');
    t.text('status');
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_profiles');
};
