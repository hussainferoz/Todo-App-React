import React from 'react';

const Login = () => {
	return (
		<div className="login__container">
			<div className="login__content">
				<div className="login__content__image">
					<span>Welcome To The Todo App</span>
					<img src={require('../../assets/logo.png')} />
				</div>
				<div className="login__content__form" />
			</div>
		</div>
	);
};

export default Login;
