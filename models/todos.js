const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true
	},
	todo: [
		{
			todoName: String,
			isDeleted: Boolean
		}
	]
});

module.exports = mongoose.model('todos', TodoSchema);
