
exports.up = function(knex, Promise) {
  // make the change
  return knex.schema.createTable('dogs', (table) => {
    table.increments(); // Creates an auto-incrementing primary key called id
    table.timestamps(); // Creates created_at and updated_at datetimes.
    table.string('name').unique().notNullable(); // string is varchar(255)
    table.string('tv_show');
  });

};

exports.down = function(knex, Promise) {
  // revert the change
  return knex.schema.dropTable('dogs');
};
