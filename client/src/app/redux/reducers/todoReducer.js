import { UPDATE_TODOS, SET_USER_DATA } from '../actions/todoActions';

const initialState = {
	fullName: '',
	todos: [],
	isLoading: true
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TODOS:
			return {
				...state,
				todos: action.todos
			};
		case SET_USER_DATA:
			return {
				...state,
				fullName: action.data.fullName,
				todos: action.data.todos,
				isLoading: false
			};

		default:
			return state;
	}
};

export default todoReducer;
