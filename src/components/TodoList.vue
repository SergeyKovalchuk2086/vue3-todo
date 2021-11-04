<template>
	<div class="todo__list">
		<!-- поиск списка дел -->
		<div class="todo__list-filter"></div>

		<!-- все списки дел -->
		<Item v-for="todo in allTodos" :key="todo.id" :todoData="todo" />

		<!-- добавление списка дел -->
		<AddItem />
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import Item from "@/components/Item.vue";
import AddItem from "@/components/AddItem.vue";
export default {
	components: {
		Item,
		AddItem,
	},

	computed: mapGetters(["validTodos", "allTodos"]),
	methods: {
		...mapActions(["fetchTodos"]),
	},

	// async mounted() {
	// 	this.fetchTodos();
	// },
};
</script>

<style>
.todo__list {
	padding: 5px;
	position: relative;
	display: flex;
	flex-direction: column;
	border: 1px solid red;
	width: 322px;
	min-height: 450px;
}
</style>
