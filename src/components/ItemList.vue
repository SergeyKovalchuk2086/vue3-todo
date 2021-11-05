<template>
	<div class="itemListContent" v-if="currentTodo.id">
		<h1 class="listHeader" v-if="currentTodo">{{ currentTodo.title }}</h1>
		<div class="content">
			<TodoInfo v-for="(item, index) in getTodoFromState" :key="item.id" :todoInfo="item" :index="index" />
		</div>

		<div class="addContent">
			<my-input type="text" v-model="todo" class="input__text" placeholder="Введите дело..." />
			<input type="checkbox" id="check" v-model="checkBox" class="checkbox" />
			<label for="check">Срочное дело</label>
			<my-button @click="addTodo" class="add__todo">Добавить дело</my-button>
		</div>
	</div>
	<div v-else class="noTodoList">No Todo List :(</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TodoInfo from "./TodoInfo.vue";

export default {
	components: {
		TodoInfo,
	},
	data() {
		return {
			todo: "",
			checkBox: false,
		};
	},
	computed: {
		...mapGetters(["currentTodo", "allTodo", "getTodoFromState", "allTodos"]),
	},

	methods: {
		...mapMutations(["addTodoInList"]),

		addTodo() {
			this.addTodoInList({
				title: this.todo,
				id: this.currentTodo.id,
				idDelete: Date.now(),
				checked: this.checkBox,
				time: new Date(),
			});
			this.todo = "";
			this.checkBox = false;
		},
	},
};
</script>

<style>
.itemListContent {
	width: 600px;
	height: 500px;
	padding: 5px;
	position: relative;
}

.listHeader {
	text-align: center;
}

.addContent {
	position: absolute;
	bottom: 0;
	display: flex;
	width: 560px;
	align-items: center;
}

.checkbox {
	margin: 0 15px 0 15px;
}

label {
	min-width: 110px;
	font-size: 16px;
	margin-right: 10px;
}

.add__todo {
	min-width: 150px;
}

.input__text {
	width: 247px;
}

.noTodoList {
	margin: auto;
}
</style>
