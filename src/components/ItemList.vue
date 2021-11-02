<template>
	<div class="todoListContent">
		<h1>Название списка</h1>
		<div class="content"></div>
		<div class="addContent">
			<my-input type="text" v-model="todo" class="input__text" placeholder="Введите дело..." />
			<input type="checkbox" id="check" class="checkbox" />
			<label for="check">Срочное дело</label>
			<my-button @click="addTodoInList" class="add__todo">Добавить дело</my-button>
		</div>
	</div>
</template>

<script>


export default {
	data() {
		return {
			todo: "",
		};
	},

	methods: {
	
		
	},
};
</script>

<style>
.todoListContent {
	border: 1px solid orangered;
	width: 500px;
	padding: 5px;
	position: relative;
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
