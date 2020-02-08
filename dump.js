
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
              .unsigned()
              .reference('id')
              .inTable('ProjectTable')
        })
        .createTable('ProjectResource', tbl => {
            tbl.increments()
            tbl.integer('Resource_id')
              .notNullable()
              .reference('id')
              .intable('ResourceTable')
            tbl.integer('Project_id')
              .notNullable()
              .reference('id')
              .intable('ProjectTable')
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
  