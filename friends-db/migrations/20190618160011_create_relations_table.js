
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('relations', function (table) {
     table.increments('id');
     table.string('type', 255).notNullable();
     table.integer('friend_a').unsigned().notNullable();
     table.integer('friend_b').unsigned().notNullable();


     table.foreign('friend_a').references('id').inTable('friends');
     table.foreign('friend_b').references('id').inTable('friends');
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("relations")

};
