import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		VITE_API_URL: `"${process.env.VITE_API_URL}"`,
		VITE_API_KEY: `"${process.env.VITE_API_KEY}"`,
	},
});
