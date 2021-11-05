<template>
	<div class="todoInfo">
		<input type="checkbox" class="todoDone" />
		<span v-show="todoInfo.checked" class="urgent"></span>
		<p class="titleTodo">{{ todoInfo.title }}</p>
		<p class="dateTodo">{{ formatDate(todoInfo.time) }}</p>
		<my-button @click="showModalWindow" class="delete">&#10006;</my-button>
	</div>

	<div class="modalContainer" v-if="modalWindowVisible">
		<my-modal-window @close="showModalWindow">
			<div class="modalHeader">
				<p>Удалить дело</p>
				<button @click="showModalWindow">&#10006;</button>
			</div>

			<p class="del">
				Удалить дело <span class="todoToDelete">{{ todoInfo.title }}</span
				>
			</p>
			<div class="modalButtons">
				<button @click="showModalWindow" class="btnInModal">Отмена</button>
				<button @click="deletetodo" class="btnInModal">Удалить</button>
			</div>
		</my-modal-window>
	</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import MyModalWindow from "./UI/MyModalWindow.vue";
export default {
	components: {
		MyModalWindow,
	},
	data() {
		return {
			modalWindowVisible: false,
		};
	},
	props: {
		todoInfo: {
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
	computed: {
		...mapGetters(["allTodo"]),
	},

	methods: {
		...mapMutations(["deleteTodoFromList"]),
		deletetodo() {
			this.deleteTodoFromList(this.index);
		},

		formatDate: (d) => d.toLocaleString("ru-RU").replace(",", "".slice(0, -3)),

		showModalWindow() {
			this.modalWindowVisible = !this.modalWindowVisible;
		},
	},
};
</script>

<style scoped>
.del .todoTodelete {
	display: flex;
	align-items: center;
}

.todoInfo {
	position: relative;
	display: flex;
	align-items: center;
	max-width: 560px;
	line-height: 28px;
	min-height: 50px;
}

.todoInfo p {
	word-wrap: break-word;
}

.todoInfo {
	margin-top: 15px;
}

.titleTodo {
	max-width: 290px;
	position: absolute;
	left: 70px;
	border-bottom: 1px solid black;
}

.dateTodo {
	position: absolute;
	right: 40px;
}

.urgent {
	width: 11px;
	height: 10px;
	display: block;
	background-color: red;
	border-radius: 50%;
	margin-right: 15px;
}

.todoDone {
	margin: 0 15px;
}

.delete {
	position: absolute;
	right: 0;
	height: 23px;
	width: 23px;
}

.modalHeader {
	display: flex;
	margin-top: 8px;
	padding-bottom: 10px;
	justify-content: space-between;
	margin-bottom: 10px;
	border-bottom: 1px solid black;
}

.modalHeader button {
	height: 23px;
	width: 23px;
}

.modalButtons {
	margin-top: 10px;
	width: 240px;
	display: flex;
	justify-content: space-between;
}

.modalContainer {
	z-index: 100;
}

.todoToDelete {
	display: inline-block;
	width: 145px;
	height: 15px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 20px;
}

.btnInModal {
	width: 100px;
	height: 25px;
	background: #fff;
	border: 1px solid #000;
}
</style>
