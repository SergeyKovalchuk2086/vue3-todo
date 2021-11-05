<template>
	<div class="modalWindow" @click.self="hideModal">
		<div class="modalWindowContent">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "my-modal-window",

	methods: {
		hideModal() {
			this.$emit("close");
		},
	},
};
</script>

<style scoped>
.modalWindow {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	z-index: 100;
}

.modalWindowContent {
	margin: 200px auto;
	padding: 10px 20px;
	background: #fff;
	border-radius: 10px;
	width: 350px;
	height: 130px;
}
</style>
