const db = require('../data/db-config.js');

function getTasksId(id) {
    return db('TaskTable as t')
    .join('ProjectTable as pt', 'pt.id', 't.Project_id')
    .where('pt.id',id)
    .select('pt.ProjectName','t.TaskDescription', 'pt.Description')
}

function postTasks(taskData, id) {
    return db('TaskTable').insert(taskData, id)
}

function getTasks() {
    return db('TaskTable')
}

module.exports = {
    getTasksId,
    postTasks,
    getTasks
}