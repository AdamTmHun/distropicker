const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#1AD572',

					secondary: '#53ed67',

					accent: '#016d0a',

					neutral: '#1c1917',

					'base-100': '#14532d',

					info: '#1d4ed8',

					success: '#166534',

					warning: '#facc15',

					error: '#b91c1c'
				}
				/*mytheme: {
					primary: '#ff4633',

					secondary: '#9e2a1e',

					accent: '#016d0a',

					neutral: '#1c1917',

					'base-100': '#1D21A8',

					info: '#1d4ed8',

					success: '#166534',

					warning: '#facc15',

					error: '#b91c1c'
				}*/
			}
		]
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')]
};
