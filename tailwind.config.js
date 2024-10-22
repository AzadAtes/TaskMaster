/** @type {import("tailwindcss").Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-bg-color": "var(--main-bg-color)",
			},
			spacing: {
				"app-header-height": "var(--app-header-height)",
				"sidebar-width": "var(--sidebar-width)",
				"navbar-width": "var(--navbar-width)",
				"tasks-view-content": "calc(100% - var(--sidebar-width))",
				"router-view": "calc(100% - var(--navbar-width))",
			},
			borderWidth: {
				'1': '1px',
			},
		},
	},
	plugins: [],
};
