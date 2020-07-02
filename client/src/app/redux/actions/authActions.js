import Axios from 'axios';

export const SET_TOKEN = 'SET_TOKEN';

export const getTokenFromServer = (email, password) => async (dispatch) => {
	const { data: { token } } = await Axios.post('/api/login', { email, password });
	localStorage.setItem('auth-token', token);
	dispatch({
		type: SET_TOKEN,
		token
	});
};

export const getTokenFromStorage = () => async (dispatch) => {
	const token = localStorage.getItem('auth-token');
	dispatch({
		type: SET_TOKEN,
		token
	});
};
