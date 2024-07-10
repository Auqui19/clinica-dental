/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-gray': '#F8F8F8',
				'secondary-teal': '#00B4B5',
				'secondary-green': '#24B89F',
				'secondary-black': '#141414',
				'secondary-bluewhite': '#E8F1F6',
			},
			backgroundImage: {
				'portada': "url('portada-img-krebs.webp')",
			},
		},
	},
	plugins: [],
}
