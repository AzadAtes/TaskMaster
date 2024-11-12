<script setup lang="ts">
import Task from "./Task.vue";
import { PropType } from "vue";

const props = defineProps({
	tasks: {
		type: Array as PropType<Task[]>,
		required: true,
	},
});
</script>

<template>
	<ul class="flex flex-col gap-3">
		<Task v-for="task in props.tasks" :task="task" :key="task.id" />
	</ul>
</template>

<style scoped></style>
