<script setup lang="ts">
import { PropType } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});
</script>

<template>
	<li>
		<div class="my-2 rounded border-2 p-2">
			<p>
				{{ props.task.name }}
			</p>
			<p>
				{{ props.task.description }}
			</p>
		</div>
		<TaskList v-if="props.task.subTasks" :tasks="props.task.subTasks"></TaskList>
	</li>
</template>

<style scoped></style>
