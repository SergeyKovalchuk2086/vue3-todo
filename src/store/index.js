import { createStore } from "vuex";
import ItemList from "./modules/ItemList";
import TodoItem from "./modules/TodoItem";

export default createStore({
	modules: {
		TodoItem,
		ItemList,
	},
});
