
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {name: 'Tupac'},
        {name: 'Gangsta Boo'},
        {name: 'Run the Jewels'}
      ]);
    });
};
