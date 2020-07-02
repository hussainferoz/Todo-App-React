import React, { useState } from 'react';
import './styles/main.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import RootContainer from './containers/RootContainer';
import todoReducer from './redux/reducers/todoReducer';
import authReducer from './redux/reducers/authReducer';

const store = createStore(combineReducers({ todoReducer, authReducer }), applyMiddleware(thunk));

function App() {
	return (
		<Provider store={store}>
			<RootContainer />
		</Provider>
	);
}

export default App;
