import React, { useState } from 'react';
import './styles/main.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Routes
import LoginRoute from './routes/LoginRoute';
import TodoRoute from './routes/TodoRoute';
import todoReducer from './redux/reducers/todoReducer';

const store = createStore(combineReducers({ todoReducer }), applyMiddleware(thunk));

function App() {
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);
	return <Provider store={store}>{isAuthenticated ? <TodoRoute /> : <LoginRoute />}</Provider>;
}

export default App;
