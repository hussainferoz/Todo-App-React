import { UPDATE_TODOS } from '../actions/todoActions';

const initialState = {
	todos: [
		{ todoName: 'Bread', isDeleted: false },
		{ todoName: 'Butter', isDeleted: false },
		{ todoName: 'Eggs', isDeleted: false }
	]
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
