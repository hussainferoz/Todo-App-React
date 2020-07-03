import React from 'react';

import { Typography, Button } from '@material-ui/core';

const header = ({ clickLogout }) => {
	return (
		<div className="header__container">
			<div className="header__bar">
				<div className="header__bar__left">
					<Typography variant="h6">The Todo App</Typography>
				</div>
				<div className="header__bar__right">
					<Button className="header__button" onClick={clickLogout}>
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
};

export default header;
