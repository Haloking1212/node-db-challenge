
exports.up = function(knex) {
    return ( 
        knex.schema.createTable('ProjectTable', tbl => {
            tbl.increments()
            tbl.string('ProjectName')
            .notNullable()
            .unique()
            tbl.text('Description')
            tbl.boolean("Completed").defaultTo(false)
        })
        .createTable('ResourceTable', tbl => {
            tbl.increments()
            tbl.string('ResourceName')
            .notNullable()
            .unique()
            tbl.text('Description')
        })
        .createTable('TaskTable', tbl => {
            tbl.increments()
            tbl.text('TaskDescription')
            .notNullable()
            tbl.string('Notes')
            tbl.boolean('TaskCompleted').defaultTo(false)
            tbl.integer('Project_id')
              .notNullable()
            //   .unsigned()
              .references('id')
              .inTable('ProjectTable')
        })
        .createTable('ProjectResource', tbl => {
            tbl.increments()
            tbl.integer('Resource_id')
              .notNullable()
              .references('id')
              .inTable('ResourceTable')
            tbl.integer('Project_id')
              .notNullable()
              .references('id')
              .inTable('ProjectTable')
        })
    )
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExist('ProjectResource')
      .dropTableIfExist('TaskTable')
      .dropTableIfExist('ResourceTable')
      .dropTableIfExist('ProjectTable')
  };
  