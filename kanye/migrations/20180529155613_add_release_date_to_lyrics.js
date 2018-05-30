
exports.up = function(knex, Promise) {
    return knex.schema.table('lyrics', function (table) {
        table.string('released');
    })    
};

exports.down = function(knex, Promise) {
    return knex.schema.table('lyrics', function (table) {
        table.dropColumn('released');
    })    

};
