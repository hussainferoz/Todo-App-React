const Users = require('../models/users');

exports.updateTodo = async (request, response) => {
	const userId = request.userId;
	const { todos } = request.body;
	await Users.findByIdAndUpdate(userId, { $set: { todos } });
	response.json({ message: 'Todo list SuccessFully Updated' });
};
