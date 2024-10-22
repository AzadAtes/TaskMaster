<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import TaskList from "../components/tasks/TaskList.vue";
import Sidebar from "../components/Sidebar.vue";
const taskStore = useTaskStore();
</script>

<template>
	<main id="task-view-container" class="flex min-h-full">
		<Sidebar class="min-h-full w-1/6 border-r-2" />
		<div class="flex flex-1 content-center items-center justify-center">
			<div id="tasks-container" class="flex-1 pt-8">
				<TaskList class="flex-1" :tasks="taskStore.tasks" />
			</div>
		</div>
	</main>
</template>

<style>
#tasks-container {
	max-width: 90%;
}
</style>
