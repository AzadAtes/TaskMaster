<script setup lang="ts">
import SettingsOutlineIcon from "./icons/SettingsOutlineIcon.vue";
import AccountCircleIcon from "./icons/AccountCircleIcon.vue";
import SearchBar from "./SearchBar.vue";
import NotificationNoneIcon from "./icons/NotificationNoneIcon.vue";
</script>

<template>
	<header class="bg-neutral-750 sticky top-0 z-50 flex h-app-header-height w-full border-b-1 border-neutral-600 shadow-lg">
		<div id="header-left-section" class="flex h-full w-1/3 items-center justify-start">
			<img src="../../assets/TaskMasterLogo.png" alt="TaskMaster Logo" class="mx-3 h-9 w-auto cursor-pointer" />
		</div>
		<div id="header-mid-section" class="flex h-full w-1/3 items-center justify-center">
			<SearchBar />
		</div>
		<div id="header-right-section" class="flex w-1/3 items-center justify-end gap-2 pr-2">
			<div class="icon-wrapper hover:bg-neutral-600">
				<NotificationNoneIcon />
			</div>
			<div class="icon-wrapper hover:bg-neutral-600">
				<AccountCircleIcon />
			</div>
			<div class="icon-wrapper hover:bg-neutral-600">
				<SettingsOutlineIcon />
			</div>
		</div>
	</header>
</template>

<style scoped></style>
