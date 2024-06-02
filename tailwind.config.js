/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-dark-gray': '#34353a',
				'brand-light-gray': '#a1a2a3',
				'brand-white': '#fdfdfd',
				'brand-golden': '#ffc86b',
				'brand-yellow': '#f0bf6c',
				'brand-golden-gray': '#3d3e42',
				'brand-blue-gray': '#31333b',
				'brand-yellow-shadow': '#a6721a'
			},
			fontFamily: {
				display: ['Rubik', 'sans-serif']
			}
		}
	},
	plugins: []
};
