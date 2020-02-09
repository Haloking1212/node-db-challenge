
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ResourceTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('ResourceTable').insert([
        { ResourceName: 'Coding Mvp', Description: "bruh" }
      ]);
    });
};
