import { SET_TOKEN } from '../actions/authActions';

const initialState = {
	token: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return {
				token: action.token
			};

		default:
			return state;
	}
};

export default authReducer;