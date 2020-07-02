import React, { useState } from 'react';

import {
	AppBar,
	Tabs,
	Tab,
	Button,
	List,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../redux/actions/todoActions';

import Header from '../components/Header';
import Lists from '../components/Lists';
import NoItems from '../components/NoItems';
import TabPanel from '../components/TabPanel';

const Todo = () => {
	const todos = useSelector((state) => state.todoReducer.todos);
	const [ modalVisibility, setModalVisibility ] = useState(false);
	const [ todoNameValue, setTodoNameValue ] = useState('');

	const dispatch = useDispatch();

	const handleDelete = (valueIndex) => {
		dispatch(updateTodo(todos.map((todo, index) => (index === valueIndex ? { ...todo, isDeleted: true } : todo))));
	};

	const handleAddTodo = () => {
		if (todoNameValue) {
			dispatch(updateTodo([ { todoName: todoNameValue, isDeleted: false }, ...todos ]));
			setTodoNameValue('');
			setModalVisibility(false);
		}
	};

	const todoAvailable = todos.find((element) => element.isDeleted === false);

	const handleModalClose = () => {
		setModalVisibility(false);
	};

	const handleModalOpen = () => {
		setModalVisibility(true);
	};

	const handleTodoValueChange = (event) => {
		setTodoNameValue(event.target.value);
	};

	return (
		<div className="todo__container">
			<Dialog open={modalVisibility} onClose={handleModalClose}>
				<DialogTitle>Add Todo</DialogTitle>
				<DialogContent>
					<DialogContentText>Add a new todo to your list.</DialogContentText>
					<TextField
						value={todoNameValue}
						onChange={handleTodoValueChange}
						autoFocus
						margin="dense"
						id="todoName"
						label="Todo Name"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleModalClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleAddTodo} color="primary">
						Add Todo
					</Button>
				</DialogActions>
			</Dialog>

			<Header />

			<div className="todo__content">
				<AppBar position="static" color="default" className="todo__appbar">
					<Tabs textColor="primary" value={0} indicatorColor="primary">
						<Tab label="All Todos" />
					</Tabs>
					<Button variant="contained" color="primary" className="add__todo" onClick={handleModalOpen}>
						Add Todo
					</Button>
				</AppBar>
				<TabPanel>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							maxHeight: '75vh',
							overflowY: 'auto'
						}}
					>
						<List style={{ width: '100%' }}>
							<Lists head />

							{todoAvailable ? (
								todos.map(
									(todo, index) =>
										todo.isDeleted ? null : (
											<Lists
												key={index}
												itemName={todo.todoName}
												click={() => handleDelete(index)}
											/>
										)
								)
							) : (
								<NoItems>No Todos Available</NoItems>
							)}
						</List>
					</div>
				</TabPanel>
			</div>
		</div>
	);
};

export default Todo;
