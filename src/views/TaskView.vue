<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import TaskList from "../components/tasks/TaskList.vue";
import Sidebar from "../components/Sidebar.vue";
const taskStore = useTaskStore();
</script>

<template>
	<div id="tasks-view" class=" min-h-full flex-1">
		<Sidebar id="tasks-view-sidebar" />
		<main id="tasks-view-content" class="flex flex-1 justify-center relative left-sidebar-width w-tasks-view-content">
			<div id="tasks-container" class="w-11/12 py-6">
				<TaskList id="tasks" :tasks="taskStore.tasks" class="ml-0 border-none" />
			</div>
		</main>
	</div>
</template>

<style></style>
