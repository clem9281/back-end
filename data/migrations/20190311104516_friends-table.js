
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', t => {
    t.increments();

    t.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('user_profiles')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    t.integer('friend_id')
    .unsigned()
    .references('id')
    .inTable('user_profiles')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends');
};
