/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				"app-content": "calc(100% - var(--app-header-height))",
				"app-header": "var(--app-header-height)",
			},
			minHeight: {
				"app-content": "calc(100% - var(--app-header-height))",
				"app-header": "var(--app-header-height)",
			},
			maxHeight: {
				"app-content": "calc(100% - var(--app-header-height))",
				"app-header": "var(--app-header-height)",
			},
			spacing: {
				"app-header": "var(--app-header-height)",
			},
			margin: {
				"app-header": "var(--app-header-height)",
			},
			width: {
				navbar: "var(--navbar-width)",
				"view-container": "calc(100% - var(--navbar-width))",
			},
			minWidth: {
				navbar: "var(--navbar-width)",
				"view-container": "calc(100% - var(--navbar-width))",
			},
			maxWidth: {
				navbar: "var(--navbar-width)",
				"view-container": "calc(100% - var(--navbar-width))",
			},
		},
	},
	plugins: [],
};
