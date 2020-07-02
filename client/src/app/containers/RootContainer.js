import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginRoute from '../routes/LoginRoute';
import TodoRoute from '../routes/TodoRoute';

const RootContainer = () => {
	const token = useSelector((state) => state.authReducer.token);
	return (
		<Router>
			<Switch>
				<Route path="/login" render={() => (token ? <Redirect to={{ pathname: '/' }} /> : <LoginRoute />)} />
				<Route path="/" render={() => (token ? <TodoRoute /> : <Redirect to={{ pathname: '/login' }} />)} />
			</Switch>
		</Router>
	);
};

export default RootContainer;
