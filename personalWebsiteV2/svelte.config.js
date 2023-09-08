/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
 
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: "@import 'src/lib/styles/variables.scss';"
			}
		})
	],
	kit: {
		adapter: adapter({
			fallback: '/src/routes/failure.html',
		}),
		
		// hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;