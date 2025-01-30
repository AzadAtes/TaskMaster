<script setup lang="ts"></script>

<template>
	<label class="cursor-pointer">
		<label class="flex h-4 w-4 cursor-pointer items-center justify-center">
			<input type="checkbox" class="peer absolute opacity-0" />
			<span
				class="transition-bg-image relative h-4 w-4 border-2 border-neutral-400 rounded-lg bg-[url('assets/check.png')] duration-200 ease-linear peer-checked:border-green-600 peer-checked:bg-cover peer-checked:bg-center"
			></span>
		</label>
	</label>
</template>

<style scoped></style>
