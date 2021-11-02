export default {
	state: {
		todos: [],
	},
	getters: {
		allTodos(state) {
			return state.todos;
		},

		validTodos(state) {
			return state.todos.filter((todo) => {
				return todo.title;
			});
		},
	},
	mutations: {
		updateTodos(state, todos) {
			state.todos = todos;
		},

		createTodoItem(state, newTodoItem) {
			state.todos.push(newTodoItem);
		},

		deleteTodo(state, removeTodo) {
			state.todos.splice(removeTodo, 1);
		},

		addItemInList(state, item) {
		// 	state.todos[0].id === item.id ? console.log(1) : console.log(2);


			state.todos.push(item);
		},
	},
	actions: {
		async fetchTodos(ctx) {
			let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=0");
			let todos = await res.json();
			ctx.commit("updateTodos", todos);
		},

		addItem(ctx) {
			ctx.commit("addItemInList");
		},
	},
};
