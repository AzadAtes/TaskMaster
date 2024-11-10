<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
	<Header id="app-header" />
	<div id="app-content" class="relative">
		<Navbar id="app-nav-bar" />
		<RouterView class="min-h-app-content relative left-navbar-width min-h-full w-router-view" />
	</div>
</template>

<style scoped></style>
