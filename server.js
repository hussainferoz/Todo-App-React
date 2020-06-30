const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./config/database');

//Access env variables
dotenv.config();

//Database connection
connectDb();

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
