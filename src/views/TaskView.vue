<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import TaskList from "../components/tasks/TaskList.vue";
import LeftTaskSidebar from "../components/tasks/LeftTaskSidebar.vue";
import RightTaskSidebar from "../components/tasks/RightTaskSidebar.vue";
const taskStore = useTaskStore();
</script>

<template>
	<div id="tasks-view" class="flex min-h-full flex-1 justify-center">
		<LeftTaskSidebar id="tasks-view-left-sidebar" />
		<main id="tasks-view-content" class="custom-scrollbar flex-1 overflow-y-auto">
			<div id="tasks-container" class="mx-auto px-12 py-6">
				<TaskList id="tasks" :tasks="taskStore.tasks" class="pl-0" />
			</div>
		</main>
		<RightTaskSidebar id="tasks-view-right-sidebar" />
	</div>
</template>

<style></style>
