const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGOURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1); //exit with failure
	}
};

module.exports = connectDB;
