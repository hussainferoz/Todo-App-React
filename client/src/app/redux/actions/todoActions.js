import Axios from 'axios';

export const UPDATE_TODOS = 'UPDATE_TODOS';
export const SET_USER_DATA = 'SET_USER_DATA';

export const updateTodo = (todos) => (dispatch) => {
	dispatch({
		type: UPDATE_TODOS,
		todos
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
		data
	});
};
