import adapterGhpages from "svelte-adapter-ghpages";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	paths: {
	},
	kit: {
		adapter: adapterGhpages(),
		prerender: {
			default: true
		},
	}
};

export default config;
