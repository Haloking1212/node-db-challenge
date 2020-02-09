const db = require('../data/db-config.js');

function getResources() {
    return db('ResourceTable')
}

function postResources(resourceData) {
    return db('ResourceTable').insert(resourceData)
}

module.exports = {
    getResources,
    postResources
}