import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

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
			// i'm not sure how i feel about <code> tags being
			// wrapped in backticks, so i'm commenting this out
			// in case i want to remove it later
			// typography: {
			// 	DEFAULT: {
			// 		css: {
			// 			'code::before': {
			// 				content: '"`"'
			// 			},
			// 			'code::after': {
			// 				content: '"`"'
			// 			}
			// 		}
			// 	}
			// }
		}
	},
	plugins: [typography]
};

module.exports = config;
