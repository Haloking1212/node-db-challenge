const db = require('../data/db-config.js');

function getProjects() {
    return db('ProjectTable')
}

function postProjects(projectData) {
    return db('ProjectTable').insert(projectData)
}

module.exports = {
    getProjects,
    postProjects
}