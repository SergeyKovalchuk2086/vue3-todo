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
}
</style>
