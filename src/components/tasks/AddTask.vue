<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../../stores/taskStore.ts";
import PlusIcon from "../icons/PlusIcon.vue";

let input = ref("")

const taskStore = useTaskStore()

const addTask = () => {
	if (input.value.trim() === "") return;
	console.log(input.value);
	taskStore.createTask();
	input.value = "";
};
</script>

<template>
	<div class="w-full bg-neutral-750 rounded-md">
		<input v-model="input" @blur="addTask" type="text" placeholder="add new Task.." class="ml-8 h-full p-3 w-full cursor-pointer border-none bg-transparent outline-none placeholder-neutral-300 focus:placeholder-neutral-40" />
		<PlusIcon class="w-6 h-6 absolute left-14 top-3 text-white"/>
	</div>
</template>

<style scoped>

</style>