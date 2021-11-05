<template>
	<button>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "my-button",
};
</script>

<style scoped>
button {
	margin: 5px 0;
	height: 30px;
	background-color: #fff;
	outline: none;
	border: 1px solid black;
	font-size: 16px;
	border-radius: 5px;
}
</style>
