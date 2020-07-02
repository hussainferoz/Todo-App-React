import React, { useState } from 'react';

import { Typography, TextField, InputAdornment, IconButton, Button } from '@material-ui/core';
import { VisibilityOutlined, VisibilityOffOutlined, VpnKeyOutlined, EmailOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { getTokenFromServer } from '../redux/actions/authActions';

const Login = () => {
	const [ showPassword, setShowPassword ] = useState(false);
	const [ password, setPassword ] = useState('');
	const [ email, setEmail ] = useState('');

	const dispatch = useDispatch();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleLogin = () => {
		dispatch(getTokenFromServer(email, password));
	};

	return (
		<div className="login__container">
			<div className="login__content">
				<div className="login__content__image">
					<Typography variant="h3">The Todo App</Typography>
					<img src={require('../../assets/logo.png')} />
				</div>
				<div className="login__content__form">
					<span className="form__heading">
						<Typography variant="h4">Welcome,</Typography>
						<Typography variant="h4">Login to continue</Typography>
					</span>
					<span className="form__field">
						<TextField
							className="textfield__input"
							label="Enter Email"
							value={email}
							onChange={(event) => handleEmailChange(event)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<EmailOutlined />
									</InputAdornment>
								)
							}}
						/>
						<TextField
							className="textfield__input"
							type={showPassword ? 'text' : 'password'}
							label="Enter Password"
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={(event) => handlePasswordChange(event)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<VpnKeyOutlined />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
						<Button variant="contained" color="primary" className="textfield__input" onClick={handleLogin}>
							Login
						</Button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
