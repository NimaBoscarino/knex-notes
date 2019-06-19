
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {id: 1, first_name: 'Ross', last_name: 'Geller'},
        {id: 2, first_name: 'Monica', last_name: 'Geller'},
        {id: 3, first_name: 'Chandler', last_name: 'Bing'},
        {id: 4, first_name: 'Joey', last_name: 'Tribbiani'},
        {id: 5, first_name: 'Phoebe', last_name: 'Buffay'},
        {id: 6, first_name: 'Rachel', last_name: 'Greep'},
      ]);

    });
};
