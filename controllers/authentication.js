const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users');

exports.getLogin = async (request, response) => {
	try {
		const userId = request.userId;

		//Find the user's data by userId and return the data to the user
		const { todos } = await Users.findById(userId);
		return response.json({ todos });
	} catch (error) {
		console.error(error.message);
		return response.json({ message: 'Server Error' });
	}
};

exports.postLogin = async (request, response) => {
	const { email, password } = request.body;

	try {
		let user = await Users.findOne({ email });

		//if user email is not found return with error
		if (!user) {
			return response.json({ message: 'Invalid email or password' });
		}

		const matchPassword = await bcrypt.compare(password, user.password);

		//if user email is found but password doesnot match return with error
		if (!matchPassword) {
			return response.json({ message: 'Invalid email or password' });
		}

		const { _id } = user;

		//create token payload
		const payload = {
			userId: _id
		};

		//create jwt token with payload and send to the user
		jwt.sign(payload, process.env.JWTSECRET, (error, token) => {
			if (error) {
				throw error;
			}
			response.json({ token });
		});
	} catch (error) {
		console.error(error);
		return response.json({ message: 'Server Error' });
	}
};
