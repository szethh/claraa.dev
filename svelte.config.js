import adapter from '@sveltejs/adapter-cloudflare';
import { sveltePreprocess } from 'svelte-preprocess';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		// vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.svx'],
			rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]]
		}),
		sveltePreprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;
