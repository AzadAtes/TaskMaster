import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
	const tasksRoute = import.meta.env.VITE_TASKS_ROUTE;
	const tasks = ref<Task[]>([]);

	const getTasks = async () => {
		try {
			if (!tasksRoute) {
				throw new Error("VITE_TASKS_ROUTE is not defined");
			}
			console.log("Fetching tasks from:", tasksRoute);

			const response = await fetch(`${tasksRoute}`);
			console.log("Response status:", response.status);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data: Array<Task> = await response.json();
			console.log("Response data:", data);

			tasks.value = data.filter((task: Task) => task.parentTaskId === null);

			console.log("Parsed tasks:", tasks.value);
			return tasks.value;
		} catch (error) {
			console.error("Error in getTasks:", error);
			alert(`Could not get tasks.\n${error}`);
		}
	};

	return { tasks, getTasks };
});
