
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lyrics', function (table) {
        table.integer('artist_id').unsigned().notNullable();
        table.integer('lyric_id').unsigned().notNullable();
        table.string('title', 30);
      
        table.foreign('artist_id').references('id').inTable('artists');
        table.foreign('lyric_id').references('id').inTable('lyrics');
      });
      
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('songs');
};
