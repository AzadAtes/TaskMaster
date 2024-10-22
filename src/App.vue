<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
	<Header id="app-header" class="h-app-header z-2 fixed w-full border-b-2" />
	<div id="app-content" class="top-app-header min-h-app-content relative flex">
		<Navbar class="min-w-navbar border-r-2" />
		<RouterView class="min-w-view-container min-h-full" />
	</div>
</template>

<style scoped></style>
