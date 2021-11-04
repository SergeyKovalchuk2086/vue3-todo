import axios from "axios";

export default {
	state: {
		todos: [
			// {
			// 	id: 1,
			// 	title: "list 1"
			// },
			// {
			// 	id: 2,
			// 	title: "list 2"
			// }

		],
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

		
	},
	actions: {
		async fetchTodos(ctx) {
			let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=0");
			let todos = await res.json();
			ctx.commit("updateTodos", todos);
		}
	},
};

