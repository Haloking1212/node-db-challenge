
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ProjectResource').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectResource').insert([
        { Resource_id: 1, Project_id: 1 }
      ]);
    });
};
