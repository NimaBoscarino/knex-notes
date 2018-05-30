
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lyrics', (table) => {
        table.increments(); // Creates an auto-incrementing primary key called id
        table.timestamps(); // Creates created_at and updated_at datetimes.
        table.string('text').unique().notNullable(); // string is varchar(255)
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lyrics');
};
