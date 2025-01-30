<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import TaskList from "./TaskList.vue";
import Checkbox from "../Checkbox.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});

const showDetails = ref(false);

const subtasksExist = computed(() => {
	if (props.task.subTasks) return props.task.subTasks.length !== 0;
	else return false;
});

const toggleDetails = () => {
	showDetails.value = !showDetails.value;
	console.log(props.task);
};
</script>

<template>
	<li class="">
		<div
			class="mx-auto cursor-pointer select-none rounded-md border-neutral-700 bg-neutral-750 hover:rounded-md hover:bg-neutral-700"
			@click="toggleDetails"
		>
			<div class="flex items-center">
				<Checkbox class="p-3" />
				<p>
					{{ props.task.name }}
				</p>
			</div>
		</div>

		<TaskList
			class="mt-3 border-l-1 border-neutral-700 pl-9"
			:tasks="props.task.subTasks"
			v-if="props.task.subTasks"
			v-show="showDetails && subtasksExist"
		></TaskList>
	</li>
</template>

<style scoped></style>
