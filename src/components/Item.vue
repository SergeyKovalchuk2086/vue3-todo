<template>
	<div class="todo__list-items" @click="getIdTodo(todoData.id)">
		<ul>
			<li>
				<p>{{ todoData.title }}</p>
				<!-- удалить дело -->
				<my-button @click="deleteTodoItem(id)" class="btnDelete" style="margin-right: 5px">&#10006;</my-button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, Store } from "vuex";

export default {
	store: Store,
	props: {
		todoData: {
			type: Object,
			default() {
				return;
			},
		},
	},

	computed: mapGetters(["validTodos"]),

	methods: {
		...mapActions(["addItem"]),
		...mapMutations(["deleteTodo", "addItemInList"]),

		deleteTodoItem() {
			this.deleteTodo({
				id: this.id,
			});
		},

		getIdTodo(id) {
			this.addItemInList({
				id: id,
			});
		},
	},
};
</script>

<style scoped>
.todo__list-items {
	max-height: 250px;
	overflow: auto;
	overflow-x: hidden;
}

.btnDelete {
	width: 22px;
}

li {
	list-style: none;
	border: 1px solid green;
	line-height: 25px;
	padding-left: 10px;
	max-width: 290px;
	margin: 5px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

li p {
	width: 242px;
	word-wrap: break-word;
}

.todo__list-items {
	max-height: 250px;
	overflow: auto;
	overflow-x: hidden;
}
</style>
