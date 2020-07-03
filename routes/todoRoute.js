const express = require('express');

const router = express.Router();

const { addTodo, deleteTodo, completeTodo } = require('../controllers/todos');
const authMiddleware = require('../middleware/authentication');

//@route    POST /api/todo/add
//@desc     Add todo item to the database
//@access   Private
router.post('/add', authMiddleware, addTodo);

//@route    POST /api/todo/delete
//@desc     Delete todo item from database
//@access   Private
router.post('/delete', authMiddleware, deleteTodo);

//@route    POST /api/todo/complete
//@desc     Mark todo item as complete in database
//@access   Private
router.post('/complete', authMiddleware, completeTodo);

module.exports = router;
