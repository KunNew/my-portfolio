module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xsm: '370px',
				'3xl': '2048px',
				'4xl': '2348px',
				'5xl': '2500px',
				'6xl': '3700px',
				'65x': '3800px',
				'7xl': '4758px',
				'8xl': '7516px',
			},
			colors: {
				'hover-highlight': 'var(--text-highlight)',
			},
			animation: {
				wiggle: 'wiggle 3s ease-in-out infinite',
				bounce: 'bounce 2s ease-in-out infinite',
				fadein: 'fadein 200ms linear'
			  },
			  keyframes: {
				wiggle: {
				  '0%, 100%': { transform: 'rotate(-4deg)' },
				  '50%': { transform: 'rotate(4deg)' },
				},
				fadein: {
				  '0%': { transform: 'translateY(-100%)'},
				  '100%': { transform: 'translateY(0)'},
				}
				
			  }
		},
	},
	plugins: [],
};
