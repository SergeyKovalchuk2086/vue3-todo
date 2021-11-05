import axios from "axios";

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

		deleteTodo(state, indexTodo) {
			state.todos.splice(indexTodo, 1);
		},
	},
	actions: {
		async fetchTodos(ctx) {
			let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=0");
			let todos = await res.json();
			ctx.commit("updateTodos", todos);
		},
	},
};
