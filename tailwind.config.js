import colors from 'tailwindcss/colors.js';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

const config = {
	content: ['./source/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.yellow,
				secondary: colors.red,
			},
			fontFamily: {
				sans: ['Montserrat', 'Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
		},
	},
	fontFamily: {
		sans: ['Montserrat', 'Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif'],
	},
	plugins: [
		typography,
		forms,
	],
};

export default config;
