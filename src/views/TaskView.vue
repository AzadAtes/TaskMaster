<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import TaskList from "../components/tasks/TaskList.vue";
import LeftTaskSidebar from "../components/tasks/LeftTaskSidebar.vue";
import RightTaskSidebar from "../components/tasks/RightTaskSidebar.vue";
import AddTask from "../components/tasks/AddTask.vue";

const taskStore = useTaskStore();
taskStore.getTasks();
</script>

<template>
	<div id="tasks-view" class="flex min-h-full flex-1 justify-center ">
		<LeftTaskSidebar id="tasks-view-left-sidebar" />
		<div id="tasks-view-content" class="flex-1 min-h-full flex justify-center flex-col mx-auto">
			<div class="sticky top-0 px-12 my-9">
				<AddTask />
			</div>
			<div id="tasks-container" class="custom-scrollbar flex-1 overflow-y-auto min-w-full mx-auto px-12 mb-6 snap-mandatory">
				<TaskList id="tasks" :tasks="taskStore.tasks" class="pl-0" />
			</div>
		</div>
		<RightTaskSidebar id="tasks-view-right-sidebar" />
	</div>
</template>

<style></style>
