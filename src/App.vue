<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
	<Header id="app-header" />
	<div id="app-content" class="sticky top-app-header-height flex h-app-content overflow-hidden">
		<Navbar id="app-nav-bar" />
		<RouterView />
	</div>
</template>

<style scoped></style>
