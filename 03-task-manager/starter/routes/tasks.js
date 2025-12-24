const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');

// get all the tasks / create a task
router.route('/').get(getAllTasks).post(createTask);

// get a single task / update task / delete task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;