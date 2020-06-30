import React, { useState } from 'react';

import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';

import Header from '../components/Header';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div className={value !== index ? 'noDisplay' : 'display'} {...other}>
			{value === index && (
				<div>
					<Typography>{children}</Typography>
				</div>
			)}
		</div>
	);
}

const Todo = () => {
	const [ value, setValue ] = useState(0);

	const handleTabsChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="todo__container">
			<Header />
			<div className="todo__content">
				<AppBar position="static" color="default" className="todo__appbar">
					<Tabs
						value={value}
						onChange={handleTabsChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="All Tasks" />
						<Tab label="New Tasks" />
						<Tab label="Completed Tasks" />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					Item One
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</div>
		</div>
	);
};

export default Todo;
