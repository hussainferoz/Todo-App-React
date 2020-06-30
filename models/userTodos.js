const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true
	},
	todo: [
		{
			todoName: String,
			completed: Boolean,
			priority: String
		}
	]
});

module.exports = mongoose.model('todos', TodoSchema);
