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
};
</script>

<template>
	<li>
		<div class="cursor-pointer select-none border-b-1 border-neutral-700" @click="toggleDetails">
			<div class="flex items-center">
				<Checkbox class="p-3" />
				<p>
					{{ props.task.name }}
				</p>
			</div>
		</div>

		<TaskList class="mt-3 pl-12" :tasks="props.task.subTasks" v-if="props.task.subTasks" v-show="showDetails && subtasksExist"></TaskList>
	</li>
</template>

<style scoped></style>
