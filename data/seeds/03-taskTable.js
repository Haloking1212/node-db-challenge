
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TaskTable').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('TaskTable').insert([
        { TaskDescription: 'Get Full Stack Job', Notes: 'blah', TaskCompleted: false, project_id: 1}
      ]);
    });
};
