import React, { useState } from 'react';
import './styles/main.css';

//Routes
import LoginRoute from './routes/LoginRoute';
import TodoRoute from './routes/TodoRoute';

function App() {
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);
	return <div>{isAuthenticated ? <TodoRoute /> : <LoginRoute />}</div>;
}

export default App;
