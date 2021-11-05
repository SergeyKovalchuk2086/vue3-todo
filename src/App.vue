<template>
	<div class="container">
		<TodoList />
		<ItemList />
	</div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import ItemList from "@/components/ItemList.vue";
export default {
	name: "Main",
	components: {
		TodoList,
		ItemList,
	},
	data() {
		return {};
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	user-select: none;
	font-family: "Lato", sans-serif;
}

.container {
	display: flex;
	justify-content: space-between;
	max-width: 950px;
	margin: 50px auto;
	border: 2px solid black;
	background-color: #d7e8f0;
}
</style>
