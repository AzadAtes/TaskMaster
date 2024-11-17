<script setup lang="ts">
import SearchIcon from "./icons/SearchIcon.vue";
</script>

<template>
	<div id="search-bar" class="flex h-8 w-full justify-start rounded-xl bg-neutral-700">
		<SearchIcon class="relative left-2 top-1 rounded-r-full text-neutral-300" />
		<input type="search" class="mx-4 w-full border-none bg-transparent placeholder-transparent outline-none" />
	</div>
</template>

<style scoped></style>
