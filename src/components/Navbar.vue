<script setup lang="ts">
import ViewListIcon from "./icons/ViewListIcon.vue";
import CalendarIcon from "./icons/CalendarIcon.vue";
import WeightIcon from "./icons/WeightIcon.vue";
import EventAvailableIcon from "./icons/EventAvailableIcon.vue";
import HistoryIcon from "./icons/HistoryIcon.vue";
import SyncOutlineIcon from "./icons/SyncOutlineIcon.vue";
</script>

<template>
	<nav class="flex w-app-header-height flex-col items-center justify-start border-r-1 border-neutral-600 bg-neutral-800">
		<div id="navbar-top-section" class="mt-4 flex w-full flex-1 flex-col items-center justify-start gap-3">
			<div class="icon-wrapper hover:bg-neutral-700">
				<EventAvailableIcon />
			</div>
			<div class="icon-wrapper hover:bg-neutral-700">
				<CalendarIcon />
			</div>
			<div class="icon-wrapper hover:bg-neutral-700">
				<ViewListIcon />
			</div>
			<div class="icon-wrapper hover:bg-neutral-700">
				<WeightIcon />
			</div>
		</div>
		<div id="navbar-bottom-section" class="mb-4 flex w-full flex-1 flex-col items-center justify-end gap-6">
			<div class="icon-wrapper hover:bg-neutral-700">
				<SyncOutlineIcon />
			</div>
			<div class="icon-wrapper hover:bg-neutral-700">
				<HistoryIcon />
			</div>
		</div>
	</nav>
</template>

<style scoped></style>
