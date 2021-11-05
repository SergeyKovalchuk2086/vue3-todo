<template>
	<div class="todo__list-add">
		<my-input type="text" class="addInput" v-model="todo" placeholder="Добавьте список дел..." />
		<my-button @click="addTodo" class="addBtn" style="min-width: 310px">Добавить список</my-button>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	data() {
		return {
			todo: "",
		};
	},

	methods: {
		...mapMutations(["createTodoItem"]),
		addTodo() {
			this.createTodoItem({
				title: this.todo,
				id: Date.now(),
			});
			this.todo = "";
		},
	},
};
</script>

<style scoped>
.todo__list-add {
	position: absolute;
	bottom: 0;
	width: 97%;
}

.todo__list-add::before {
	content: "";
	position: relative;
	top: -15px;
	display: block;
	width: 300px;
	margin: 0 auto;
	height: 1px;
	background-color: black;
}

.addInput {
	width: 100%;
}

.addBtn {
	background-color: #fff;
	outline: none;
}
</style>
