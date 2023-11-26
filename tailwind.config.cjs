import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				montserrat: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono]
			}
		}
	},

	plugins: []
};

module.exports = config;
