const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./config/database');
const authRouter = require('./routes/authentication');

//Access env variables
dotenv.config();

//Database connection
connectDb();

const app = express();

//MiddleWares
app.use(express.json({ extended: false }));

//Routes
app.use('/api/login', authRouter);

const port = 5000;

const server = app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
