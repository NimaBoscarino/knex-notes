
exports.up = function(knex, Promise) {
  // make a friends table
  return knex.schema
    .createTable('friends', function (table) {
       table.increments('id');
       table.string('first_name', 255).notNullable();
       table.string('last_name', 255).notNullable();
    })

};

exports.down = function(knex, Promise) {
  // how do you undo the change?
  // destroy the friends table
  return knex.schema
      .dropTable("friends")

};
