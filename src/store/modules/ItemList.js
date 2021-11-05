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
			state.todoList.push(todo);
		},

		deleteTodoFromList(state, index) {
			state.todoList.splice(index, 1);
		},
	},
	actions: {
		currentTodo(ctx, todo) {
			ctx.commit("setCurrentTodo", todo);
		},
	},
};

// let searchName = 'barry';
// let index = inputArr.findIndex(el => el.name === searchName);
