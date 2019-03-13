
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_bubbles', t => {
    t.increments();

    t.integer('post_id')
    .unsigned()
    .references('id')
    .inTable('posts')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    t.integer('bubble_id')
    .unsigned()
    .references('id')
    .inTable('bubbles')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post_bubbles');
};

