<template>
	<input type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
	name: "my-input",
	props: {
		modelValue: [String, Number],
	},

	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style scoped>
input[type="text"] {
	margin: 5px 0;
	height: 30px;
	padding-left: 10px;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid black;
}
</style>
