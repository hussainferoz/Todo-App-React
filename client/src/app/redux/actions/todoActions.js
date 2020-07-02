export const UPDATE_TODOS = 'UPDATE_TODOS';

export const updateTodo = (todos) => (dispatch) => {
	dispatch({
		type: UPDATE_TODOS,
		todos
	});
};
