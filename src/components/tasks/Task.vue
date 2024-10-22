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
	<li data-name="task">
		<div data-name="taskText">
			<p data-name="taskName">
				{{ props.task.name }}
			</p>
			<p data-name="taskDescription">
				{{ props.task.description }}
			</p>
		</div>
		<TaskList data-name="subTasks" v-if="props.task.subTasks" :tasks="props.task.subTasks"></TaskList>
	</li>
</template>

<style scoped></style>
