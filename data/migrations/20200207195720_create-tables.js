
exports.up = function(knex) {
  return ( 
      knex.schema.createTable('project', tbl => {
          tbl.increments()
          tbl.string('tasks').notNullable()
      })
      .createTable('task', tbl => {
          tbl.increments()
          tbl.string('resources')
      })
  )
};

exports.down = function(knex) {
  
};
