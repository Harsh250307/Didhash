
const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Add Task
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Task to Mark as Completed
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: true },
            { new: true }
        );
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
