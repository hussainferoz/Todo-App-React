import Axios from 'axios';

export const UPDATE_TODOS = 'UPDATE_TODOS';
export const SET_USER_DATA = 'SET_USER_DATA';
export const RESET = 'RESET';

export const addTodo = (newTodoItem, updatedTodo, token) => async (dispatch) => {
	const { todoName, isCompleted, isDeleted } = newTodoItem;
	await Axios.post(
		'/api/todo/add',
		{ todo: { todoName, isCompleted, isDeleted } },
		{
			headers: {
				'auth-token': token
			}
		}
	);

	dispatch({
		type: UPDATE_TODOS,
		todos: updatedTodo
	});
};

export const deleteTodo = (valueIndex, todos, token) => async (dispatch) => {
	const updatedTodo = todos;
	updatedTodo[valueIndex].isDeleted = true;

	await Axios.post(
		'/api/todo/delete',
		{ valueIndex },
		{
			headers: {
				'auth-token': token
			}
		}
	);

	dispatch({
		type: UPDATE_TODOS,
		todos: updatedTodo
	});
};

export const completeTodo = (valueIndex, todos, token) => async (dispatch) => {
	const updatedTodo = todos;
	updatedTodo[valueIndex].isCompleted = true;

	await Axios.post(
		'/api/todo/complete',
		{ valueIndex },
		{
			headers: {
				'auth-token': token
			}
		}
	);

	dispatch({
		type: UPDATE_TODOS,
		todos: updatedTodo
	});
};

export const resetTodo = () => (dispatch) => {
	dispatch({
		type: RESET
	});
};

export const fetchUserData = (token) => async (dispatch) => {
	const { data } = await Axios.get('/api/login', {
		headers: {
			'auth-token': token
		}
	});

	dispatch({
		type: SET_USER_DATA,
		data: {
			...data,
			isLoading: false
		}
	});
};
