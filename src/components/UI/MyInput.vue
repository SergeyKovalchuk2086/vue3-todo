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
	/* min-width: 310px; */
	height: 30px;
	padding-left: 10px;
}
</style>
