
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, name: 'web15'},
        {id: 2, name: 'web16'},
        {id: 3, name: 'web17'}
      ]);
    });
};
