import adapter from "@sveltejs/adapter-static";
import adapterGh from "svelte-adapter-ghpages";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapterGh( {
			pages: 'docs',
			assets: 'docs',
			fallback: null
		} ),
		prerender: {
			default: true
		},
		paths: {
			assets: "http://σ.tech",
			base: "/vitrine"
		}
	},


};

export default config;
