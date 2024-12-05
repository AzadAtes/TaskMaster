/** @type {import("tailwindcss").Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"app-header-height": "var(--app-header-height)",
				"app-content": "calc(100vh - 56px)",
				"left-sidebar-width": "var(--left-sidebar-width)",
				"right-sidebar-width": "var(--right-sidebar-width)",
				"navbar-width": "var(--navbar-width)",
				"router-view": "calc(100% - var(--navbar-width))",
				"99/100": "99%",
			},
			borderWidth: {
				1: "1px",
			},
			colors: {
				"neutral-750": "#333333",
			},
		},
	},
	plugins: [
		// Import the plugin directly
		tailwindScrollbar,
	],
};
