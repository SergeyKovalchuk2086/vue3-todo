<template>
	<div class="todo__list-items" @click="toItemList">
		<ul>
			<li>
				<p>{{ todoData.title }}</p>
				<!-- удалить дело -->
				<my-button @click="deleteTodoItem" class="btnDelete" style="margin-right: 5px">&#10006;</my-button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
	components: {},
	props: {
		todoData: {
			type: Object,
			default() {
				return;
			},
		},
		index: {
			type: Number,
			default() {
				return;
			},
		},
	},
	methods: {
		...mapMutations(["deleteTodo"]),
		...mapActions(["currentTodo"]),

		deleteTodoItem() {
			this.deleteTodo(this.index);
		},

		toItemList() {
			this.currentTodo({
				id: this.todoData.id,
				title: this.todoData.title,
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
	height: 23px;
}

li {
	list-style: none;
	/* border: 1px solid green; */
	line-height: 25px;
	padding-left: 10px;
	max-width: 290px;
	margin: 5px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

li p {
	max-width: 242px;
	word-wrap: break-word;
	border-bottom: 1px solid black;
}

.todo__list-items {
	max-height: 250px;
	overflow: auto;
	overflow-x: hidden;
}
</style>
