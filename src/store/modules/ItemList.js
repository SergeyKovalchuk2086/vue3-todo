export default {
	state: {
		todoList: [],
		currentTodo: {},
	},
	getters: {
		allTodo(state) {
			return state.todoList;
		},

		currentTodo(state) {
			return state.currentTodo;
		},
	},
	mutations: {
		setCurrentTodo(state, todo) {
			state.currentTodo = todo;
		},
	},
	actions: {
		currentTodo(ctx, todo) {
			ctx.commit("setCurrentTodo", todo);
		},
	},
};
