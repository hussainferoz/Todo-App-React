const mongoose = require('mongoose');

const connectDB = async () => {
	console.log(process.env.MONGOURI);
	// try {
	// 	await mongoose.connect(db, {
	// 		useNewUrlParser: true,
	// 		useCreateIndex: true,
	// 		useFindAndModify: false
	// 	});

	// 	console.log('MongoDB Connected');
	// } catch (error) {
	// 	console.log(error.message);
	// 	process.exit(1); //exit with failure
	// }
};

module.exports = connectDB;
