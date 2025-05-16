import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter(),
		paths: {
			base: dev ? '' : 'DavidUGH.github.io',
		}
	}
};

export default config;
