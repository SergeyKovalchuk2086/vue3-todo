export default {
	state: {
		todoList: [],
		currentTodo: "",
	},
	getters: {
		allTodo(state) {
			return state.todoList;
		},

		currentTodo(state) {
			return state.currentTodo;
		},

		getTodoFromState(state) {
			return state.todoList.filter((item) => item.id === state.currentTodo.id);
		},
	},
	mutations: {
		setCurrentTodo(state, todo) {
			state.currentTodo = todo;
		},

		addTodoInList(state, todo) {
			console.log(todo);
			state.todoList.push(todo);
		},
	},
	actions: {
		currentTodo(ctx, todo) {
			ctx.commit("setCurrentTodo", todo);
		},

		// getTodo(ctx) {
		// 	ctx.commit("updateTodo");
		// },
	},
};
