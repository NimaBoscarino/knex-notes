
exports.up = function(knex) {
    return knex.schema.createTable('artists', (table) => {
        table.increments(); // Creates an auto-incrementing primary key called id
        table.timestamps(); // Creates created_at and updated_at datetimes.
        table.string('name').unique().notNullable(); // string is varchar(255)
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artists');
};
