<template>
	<div class="itemListContent">
		<h1 class="listHeader" v-if="currentTodo">{{ currentTodo.title }}</h1>
		<div class="content">
			<p v-for="item in getTodoFromState" :key="item.id">{{ item.title }}</p>
		</div>
		<div class="addContent">
			<my-input type="text" v-model="todo" class="input__text" placeholder="Введите дело..." />
			<input type="checkbox" id="check" class="checkbox" />
			<label for="check">Срочное дело</label>
			<my-button @click="addTodo" class="add__todo">Добавить дело</my-button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
	data() {
		return {
			todo: "",
		};
	},
	computed: {
		...mapGetters(["currentTodo", "allTodo", "getTodoFromState"]),
	},

	methods: {
		...mapMutations(["addTodoInList"]),

		addTodo() {
			this.addTodoInList({
				title: this.todo,
				id: this.currentTodo.id,
			});
			this.todo = "";
		},
	},
};
</script>

<style>
.itemListContent {
	border: 1px solid orangered;
	width: 500px;
	height: 300px;
	padding: 5px;
	position: relative;
}

.listHeader {
	text-align: center;
}

.content {
	display: flex;
}

.addContent {
	position: absolute;
	bottom: 0;
	display: flex;
	width: 480px;
	align-items: center;
}

.checkbox {
	margin: 0 5px 0 15px;
}

label {
	margin-right: 15px;
}

.add__todo {
	width: 100px;
}

.input__text {
	width: 200px;
}
</style>
