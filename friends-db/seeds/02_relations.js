
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relations').del()
    .then(function () {
      // Inserts seed entries
      return knex('relations').insert([
        {id: 1, friend_a: 1, friend_b: 2, type: 'siblings'},
        {id: 2, friend_a: 6, friend_b: 4, type: 'worst subplot'},
      ]);

    });
};
