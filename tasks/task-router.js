const express = require('express');

const Tasks = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(task => {
        res.json(task)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get task' })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Tasks.getTasksId(id)
    .then(task => {
        res.json(task)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get task' })
    })
})

router.post('/:id', (req,res) => {
    const taskData = req.body
    const id = req.params.id
    Tasks.postTasks(taskData,id)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' })
    })
})

module.exports = router;