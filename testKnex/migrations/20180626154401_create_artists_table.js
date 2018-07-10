exports.up = function(knex) {
    return knex.schema.addColumn('artists', (table) => {
        table.increments(); // Creates an auto-incrementing primary key called id
        table.timestamps(); // Creates created_at and updated_at datetimes.
        table.string('name').unique().notNullable(); // string is varchar(255)
        
        // make HTTP requests

        // connect to an arduino and toast a piece of bread
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artists');
};
