import React from 'react';

import { Typography } from '@material-ui/core';
import { AccountCircleOutlined } from '@material-ui/icons';

const header = () => {
	return (
		<div className="header__container">
			<div className="header__bar">
				<div className="header__bar__left">
					<Typography variant="h6">The Todo App</Typography>
				</div>
				<div className="header__bar__right">
					<AccountCircleOutlined />
					<Typography>Hussain Feroz</Typography>
				</div>
			</div>
		</div>
	);
};

export default header;
