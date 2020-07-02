const Users = require('../models/users');

exports.addTodo = async (request, response) => {
	const userId = request.userId;
	const { todo } = request.body;
	await Users.findByIdAndUpdate(userId, { $push: { todos: todo } });
	response.json({ message: 'Todo item successfully added' });
};

exports.deleteTodo = async (request, response) => {
	const userId = request.userId;
	const { valueIndex } = request.body;
	await Users.findByIdAndUpdate(userId, null, null, (error, doc) => {
		doc.todos[valueIndex].isDeleted = true;
		doc.save();
	});
	response.json({ message: 'Todo item successfully deleted' });
};
