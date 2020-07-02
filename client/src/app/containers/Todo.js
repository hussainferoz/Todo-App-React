import React, { useState } from 'react';

import { AppBar, Tabs, Tab, Button, List } from '@material-ui/core';

import Header from '../components/Header';
import Lists from '../components/Lists';
import NoItems from '../components/NoItems';
import TabPanel from '../components/TabPanel';

const Todo = () => {
	const [ testData, settestData ] = useState([
		{ todoName: 'Bread', isDeleted: false },
		{ todoName: 'Butter', isDeleted: false },
		{ todoName: 'Eggs', isDeleted: false }
	]);

	const handleDelete = (valueIndex) => {
		settestData(testData.map((todo, index) => (index == valueIndex ? { ...todo, isDeleted: true } : todo)));
	};

	return (
		<div className="todo__container">
			<Header />
			<div className="todo__content">
				<AppBar position="static" color="default" className="todo__appbar">
					<Tabs textColor="primary" value={0} indicatorColor="white">
						<Tab label="All Todos" />
					</Tabs>
					<Button variant="contained" color="primary" className="add__task">
						Add Task
					</Button>
				</AppBar>
				<TabPanel>
					{true ? (
						<List style={{ width: '100%' }}>
							<Lists head />
							{testData.map(
								(todo, index) =>
									todo.isDeleted ? null : (
										<Lists key={index} itemName={todo.todoName} click={() => handleDelete(index)} />
									)
							)}
						</List>
					) : (
						<NoItems>No Available Todos</NoItems>
					)}
				</TabPanel>
			</div>
		</div>
	);
};

export default Todo;
