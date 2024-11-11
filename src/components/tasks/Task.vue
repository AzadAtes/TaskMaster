<script setup lang="ts">
import { PropType } from "vue";
import TaskList from "./TaskList.vue";
import Checkbox from "../Checkbox.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});
</script>

<template>
	<li>
		<div class="my-3 rounded-lg border-2 border-gray-700 bg-gray-800">
			<div class="flex items-center">
				<Checkbox class="p-3" />
				<p>
					{{ props.task.name }}
				</p>
			</div>
			<p>
				{{ props.task.description }}
			</p>
		</div>
		<TaskList v-if="props.task.subTasks" :tasks="props.task.subTasks"></TaskList>
	</li>
</template>

<style scoped></style>
