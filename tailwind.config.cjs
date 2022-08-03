const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans]
			},
			animation: {
				'anim-border': 'keyf-border 1s ease forwards'
			},
			keyframes: {
				'keyf-border': {
					'0%': {
						width: 0,
						height: 0,
						'border-top-color': 'transparent',
						'border-right-color': 'transparent',
						'border-bottom-color': 'transparent',
						'border-left-color': '#49D49D'
					},
					
					'50%': {
						width: 0,
						height: "100%",
						'border-top-color': 'transparent',
						'border-right-color': 'transparent',
						'border-bottom-color': '#49D49D',
						'border-left-color': '#49D49D'
					},
					'100%': {
						width: "100%",
						height: "100%",
						'border-top-color': 'transparent',
						'border-right-color': 'transparent',
						'border-bottom-color': '#49D49D',
						'border-left-color': '#49D49D'
					},
				}
			}
		}
	},
	daisyui: {
		themes: [
			{
				
				mytheme: {
					fontFamily: {
						sans: ['Rubik', ...defaultTheme.fontFamily.sans]
					},
					animation: {
						'anim-border': 'keyf-border 1s ease forwards'
					},
					keyframes: {
						'keyf-border': {
							'0%': {
								width: 0,
								height: 0,
								'border-top-color': 'transparent',
								'border-right-color': 'transparent',
								'border-bottom-color': 'transparent',
								'border-left-color': '#49D49D'
							},
							
							'50%': {
								width: 0,
								height: "100%",
								'border-top-color': 'transparent',
								'border-right-color': 'transparent',
								'border-bottom-color': '#49D49D',
								'border-left-color': '#49D49D'
							},
							'100%': {
								width: "100%",
								height: "100%",
								'border-top-color': 'transparent',
								'border-right-color': 'transparent',
								'border-bottom-color': '#49D49D',
								'border-left-color': '#49D49D'
							},
						}
					},
					primary: '#49D49D',

					secondary: '#69EBD0',

					accent: '#016d0a',

					neutral: '#1c1917',

					'base-100': '#1B693A',

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
	plugins: [require('daisyui'), require('tailwind-scrollbar')]
};
