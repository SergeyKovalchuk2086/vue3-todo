<template>
	<div class="todo__list">
		<!-- поиск списка дел -->
		<div class="todo__list-filter"></div>

		<!-- все списки дел -->
		<div class="cont">
			<Item v-for="(todo, index) in allTodos" :key="todo.id" :todoData="todo" :index="index" />
		</div>

		<!-- добавление списка дел -->
		<AddItem />
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import Item from "@/components/Item.vue";
import AddItem from "@/components/AddItem.vue";
export default {
	components: {
		Item,
		AddItem,
	},

	computed: {
		...mapGetters(["validTodos", "allTodos"]),
	},
	methods: {
		...mapActions(["fetchTodos"]),
	},
};
</script>

<style>
.todo__list {
	padding: 5px;
	position: relative;
	display: flex;
	flex-direction: column;
	width: 322px;
	height: 500px;
	border-right: 2px solid black;
}

.cont {
	overflow: auto;
	height: 369px;
}
</style>
