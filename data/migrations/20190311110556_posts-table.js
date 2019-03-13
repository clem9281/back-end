
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', t => {
    t.increments();
    t.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('user_profiles')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
    t.string('post_content', 256);
    t.integer('likes').defaultTo(0);
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
