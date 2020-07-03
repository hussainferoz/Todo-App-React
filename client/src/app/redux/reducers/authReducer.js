import { SET_TOKEN, REMOVE_TOKEN } from '../actions/authActions';

const initialState = {
	token: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return {
				token: action.token
			};
		case REMOVE_TOKEN:
			return {
				token: null
			};

		default:
			return state;
	}
};

export default authReducer;
