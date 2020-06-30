const bcrypt = require('bcryptjs');

const Users = require('../models/users');
const Todos = require('../models/todos');

exports.addUser = async (request, response) => {
	const { fullName, email, password } = request.body;

	try {
		//Check to see if a user alreadys exists with a same email
		let user = await Users.findOne({ email });

		//if exists return error
		if (user) {
			return response.status(400).json({ message: 'User already exists' });
		}

		//if not create an object based on the Todos model
		let todo = new Todos({
			fullName,
			todos: []
		});

		//Also create an object based on the Users model
		user = new Users({
			todoId: todo.id,
			email,
			password
		});

		//Encrypt the password using bcrypt
		const hashPassword = await bcrypt.genSalt(10);

		user.password = await bcrypt.hash(password, hashPassword);

		//save the user and todo data to the database
		await todos.save();
		await user.save();

		//Return a response if user is added.
		response.status(200).json({ message: 'User successfully added' });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Server Error' });
	}
};
