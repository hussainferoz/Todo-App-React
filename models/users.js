const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	},
	todos: [
		{
			todoName: String,
			isCompleted: Boolean,
			isDeleted: Boolean
		}
	]
});

module.exports = mongoose.model('users', UsersSchema);
