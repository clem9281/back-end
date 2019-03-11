
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_comments', t => {
    t.increments();

    t.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('user_profiles')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    t.integer('post_id')
    .unsigned()
    .references('id')
    .inTable('posts')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    t.text('comment').notNullable();

    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post_comments');
};

