const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
	todoId: {
		type: mongoose.Schema.Types.ObjectId
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	createdOn: {
		type: String,
		default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
	}
});

module.exports = mongoose.model('users', UsersSchema);
