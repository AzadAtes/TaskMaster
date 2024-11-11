<script setup lang="ts"></script>

<template>
	<label class="cursor-pointer">
		<label class="flex h-5 w-5 items-center justify-center">
			<input id="checkbox" type="checkbox" />
			<span></span>
		</label>
	</label>
</template>

<style scoped>
input[type="checkbox"] {
	opacity: 0;
	position: absolute;
}

input[type="checkbox"] + span {
	position: relative;
	width: 20px;
	height: 20px;
	border: 2px solid #374151;
	background: #111827;
	transition: background-image 0.3s ease;
}

input[type="checkbox"]:checked + span {
	background-image: url("assets/check.png");
	background-size: cover;
	background-position: center;
	border-color: #057a55;
}

input[type="checkbox"]:hover + span {
	cursor: pointer;
}
</style>
