import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import LoginRoute from '../routes/LoginRoute';
import TodoRoute from '../routes/TodoRoute';

import { getTokenFromStorage } from '../redux/actions/authActions';

const RootContainer = () => {
	const token = useSelector((state) => state.authReducer.token);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getTokenFromStorage());
		},
		[ dispatch ]
	);

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
