/** @type {import("tailwindcss").Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"app-header-height": "var(--app-header-height)",
				"app-content": "calc(100vh - 56px)",
				"sidebar-width": "var(--sidebar-width)",
				"navbar-width": "var(--navbar-width)",
				"tasks-view-content": "calc(100% - var(--sidebar-width))",
				"router-view": "calc(100% - var(--navbar-width))",
				"nav+sidebar-width": "calc(var(--navbar-width) + var(--sidebar-width))",
			},
			borderWidth: {
				1: "1px",
			},
		},
	},
	plugins: [
		// Import the plugin directly
		tailwindScrollbar,
	],
};
