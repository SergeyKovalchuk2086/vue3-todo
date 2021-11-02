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
	max-width: 850px;
	margin: 50px auto;
	background-color: rgb(157, 172, 182);
}
</style>
