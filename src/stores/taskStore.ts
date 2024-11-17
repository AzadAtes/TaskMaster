import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
	const tasks = ref<Task[]>([
		{
			id: "1",
			name: "Push-Workout",
			description: "This is a very long and precise description of the task at hand.",
			subTasks: [
				{
					id: "110",
					name: "Pushups",
					subTasks: [],
				},
				{
					id: "120",
					name: "Dips",
					description: "This is a very long and precise description of the task at hand.",
					subTasks: [
						{
							id: "111",
							name: "Set 1",
						},
						{
							id: "112",
							name: "Set 2",
							subTasks: [
								{
									id: "1111",
									name: "Set 1. 10x",
									subTasks: [
										{
											id: "111",
											name: "Set 1. 10x",
										},
										{
											id: "112",
											name: "Set 1. 10x",
											subTasks: [
												{
													id: "1111",
													name: "Set 1. 10x",
												},
												{
													id: "1112",
													name: "Set 1. 10x",
												},
											],
										},
										{
											id: "113",
											name: "Set 1. 10x",
										},
										{
											id: "114",
											name: "Set 1. 10x",
										},
									],
								},
								{
									id: "1112",
									name: "Set 1. 10x",
								},
							],
						},
					],
				},
				{
					id: "130",
					name: "Bench-press",
					subTasks: [
						{
							id: "131",
							name: "Set 1. 12x",
						},
						{
							id: "132",
							name: "Set 1. 12x",
						},
						{
							id: "133",
							name: "Set 1. 12x",
						},
					],
				},
				{
					id: "140",
					name: "Inclined Bench-press",
					subTasks: [
						{
							id: "141",
							name: "Set 1. 12x",
						},
						{
							id: "142",
							name: "Set 1. 12x",
						},
						{
							id: "143",
							name: "Set 1. 12x",
						},
					],
				},
				{
					id: "150",
					name: "Overhead-Press",
					subTasks: [
						{
							id: "151",
							name: "Set 1. 12x",
						},
						{
							id: "152",
							name: "Set 1. 12x",
						},
						{
							id: "153",
							name: "Set 1. 12x",
						},
					],
				},
			],
		},
		{
			id: "2",
			name: "This is my very second Task.",
			description: "This is a very long and precise description of the task at hand.",
			subTasks: [
				{
					id: "210",
					name: "SubTask 1",
				},
			],
		},
		{ id: "3", name: "task 3" },
		{ id: "4", name: "task 4" },
		{ id: "5", name: "task 5" },
		{ id: "6", name: "task 6" },
	]);

	return { tasks };
});
