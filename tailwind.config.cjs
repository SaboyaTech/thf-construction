/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: '#F58634',
				black: '#20262E',
				'dark-gray': '#333B44',
				'gray-2': '#929CA6',
				gray: '#BABDC2',
				'light-gray': '#F0F1F2',
				'egg-white': '#F7F9FA',
				white: '#FFFFFF',
			},
		},
	},
	plugins: [],
}
