<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import TaskList from "../components/tasks/TaskList.vue";
const taskStore = useTaskStore();
</script>

<template>
	<TaskList :tasks="taskStore.tasks" />
</template>

<style></style>
