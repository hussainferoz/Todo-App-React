const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const connectDb = require('./config/database');
const authRouter = require('./routes/authentication');
const todoRouter = require('./routes/todoRoute');
const { response } = require('express');

//Access env variables
dotenv.config();

//Database connection
connectDb();

const app = express();

//MiddleWares
app.use(express.json({ extended: false }));

//Routes
app.use('/api/login', authRouter);
app.use('/api/todo', todoRouter);

//Load index.html from client/build
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
