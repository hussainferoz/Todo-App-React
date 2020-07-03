import { UPDATE_TODOS, SET_USER_DATA, RESET } from '../actions/todoActions';

const initialState = {
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
				todos: action.data.todos,
				isLoading: false
			};
		case RESET:
			return {
				...state,
				todos: [],
				isLoading: true
			};

		default:
			return state;
	}
};

export default todoReducer;
