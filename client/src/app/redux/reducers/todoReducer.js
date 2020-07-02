import { UPDATE_TODOS } from '../actions/todoActions';

const initialState = {
	todos: []
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TODOS:
			return {
				todos: action.todos
			};

		default:
			return state;
	}
};

export default todoReducer;
