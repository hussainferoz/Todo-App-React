import React, { useState, useEffect, Fragment } from 'react';

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
	DialogActions,
	CircularProgress
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, completeTodo, resetTodo, fetchUserData } from '../redux/actions/todoActions';
import { removeToken } from '../redux/actions/authActions';

import Header from '../components/Header';
import Lists from '../components/Lists';
import NoItems from '../components/NoItems';
import TabPanel from '../components/TabPanel';

const Todo = () => {
	const { todos, isLoading, token } = useSelector((state) => {
		const { todoReducer: { todos, isLoading }, authReducer: { token } } = state;
		return {
			todos,
			isLoading,
			token
		};
	});
	const [ modalVisibility, setModalVisibility ] = useState(false);
	const [ todoNameValue, setTodoNameValue ] = useState('');
	const [ addLoading, setAddLoading ] = useState(false);

	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchUserData(token));
		},
		[ dispatch, token ]
	);

	const handleDelete = (valueIndex) => {
		dispatch(deleteTodo(valueIndex, todos, token));
	};

	const handleAddTodo = () => {
		if (todoNameValue) {
			const newTodoItem = { todoName: todoNameValue, isCompleted: false, isDeleted: false };
			const updatedTodo = [ ...todos, newTodoItem ];
			dispatch(addTodo(newTodoItem, updatedTodo, token));
			setTodoNameValue('');
			setModalVisibility(false);
		}
	};

	const handleTodoComplete = (valueIndex) => {
		dispatch(completeTodo(valueIndex, todos, token));
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

	const handleLogout = () => {
		dispatch(resetTodo());
		dispatch(removeToken());
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
					{addLoading ? (
						<CircularProgress style={{ marginRight: 15 }} />
					) : (
						<Fragment>
							<Button onClick={handleModalClose} color="primary">
								Cancel
							</Button>
							<Button onClick={handleAddTodo} color="primary">
								Add Todo
							</Button>
						</Fragment>
					)}
				</DialogActions>
			</Dialog>

			<Header clickLogout={handleLogout} />

			<div className="todo__content">
				<AppBar position="static" color="default" className="todo__appbar">
					<Tabs textColor="primary" value={0} indicatorColor="primary">
						<Tab label="All Todos" />
					</Tabs>
					<Button
						variant="contained"
						color="primary"
						className="add__todo"
						onClick={handleModalOpen}
						disabled={isLoading}
					>
						Add Todo
					</Button>
				</AppBar>
				<TabPanel>
					<div className="todo__all__list">
						<List style={{ width: '100%' }}>
							<Lists head />
							{isLoading ? (
								<div className="todo__loading">
									<CircularProgress />
								</div>
							) : todoAvailable ? (
								todos.map(
									(todo, index) =>
										todo.isDeleted ? null : (
											<Lists
												key={index}
												itemName={todo.todoName}
												completed={todo.isCompleted}
												clickDelete={() => handleDelete(index)}
												clickComplete={() => handleTodoComplete(index)}
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
