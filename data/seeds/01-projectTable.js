
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ProjectTable').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectTable').insert([
        { ProjectName: 'Mvp', Description: null, Completed: false}
      ]);
    });
};
