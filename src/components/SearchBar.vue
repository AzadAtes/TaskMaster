<script setup lang="ts">
import SearchIcon from "./icons/SearchIcon.vue";
</script>

<template>
	<div id="search-bar" class="flex h-8 w-full cursor-pointer justify-start rounded-xl bg-neutral-600 hover:bg-neutral-500">
		<SearchIcon class="relative left-2 top-1 rounded-r-full text-neutral-300" />
		<input
			type="search"
			placeholder="Search.."
			class="mx-4 w-full cursor-pointer border-none bg-transparent placeholder-transparent outline-none hover:!placeholder-neutral-300 focus:placeholder-neutral-400"
		/>
	</div>
</template>

<style scoped></style>
