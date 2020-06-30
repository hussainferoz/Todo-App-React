import React, { useState } from 'react';

import { AppBar, Tabs, Tab, Button } from '@material-ui/core';

import Header from '../components/Header';
import ListHead from '../components/ListHead';
import NoItems from '../components/NoItems';
import TabPanel from '../components/TabPanel';

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
						// variant="fullWidth"
					>
						<Tab label="All Todos" />
						<Tab label="New Todos" />
						<Tab label="Completed Todos" />
					</Tabs>
					<Button variant="contained" color="primary" className="add__task">
						Add Task
					</Button>
				</AppBar>
				<TabPanel value={value} index={0}>
					{true ? <ListHead /> : <NoItems>No Available Todos</NoItems>}
				</TabPanel>
				<TabPanel value={value} index={1}>
					{true ? <ListHead /> : <NoItems>No New Todos</NoItems>}
				</TabPanel>
				<TabPanel value={value} index={2}>
					{true ? <ListHead /> : <NoItems>No Completed Todos</NoItems>}
				</TabPanel>
			</div>
		</div>
	);
};

export default Todo;
