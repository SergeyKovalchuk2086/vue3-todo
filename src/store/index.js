import { createStore } from "vuex";
import ListItems from "./modules/ListItems";
import TodoItem from "./modules/TodoItem";

export default createStore({
	modules: {
		TodoItem, ListItems
	},
});
