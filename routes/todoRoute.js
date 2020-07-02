const express = require('express');

const router = express.Router();

const { updateTodo } = require('../controllers/todos');
const authMiddleware = require('../middleware/authentication');

//@route    POST /api/todo/update
//@desc     update todo item in the database
//@access   Private
router.post('/update', authMiddleware, updateTodo);

module.exports = router;
