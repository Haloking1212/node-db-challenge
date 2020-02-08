
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TaskTable').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('TaskTable').insert([
        { TaskDescription: 'Get Full Stack Job', Notes: null, TaskCompleted: false}
      ]);
    });
};
