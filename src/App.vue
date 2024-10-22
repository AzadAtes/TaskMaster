<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
	<Header id="app-header" />
	<div id="app-content" class="relative">
		<Navbar id="app-nav-bar"/>
		<RouterView class="min-h-full left-navbar-width relative w-router-view min-h-app-content" />
	</div>
</template>



<style scoped></style>
