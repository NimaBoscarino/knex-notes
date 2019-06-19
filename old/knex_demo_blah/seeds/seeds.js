
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'Spot'},
        {id: 2, name: 'Frida'},
        {id: 3, name: 'Barktholomew'}
      ]);
    });
};