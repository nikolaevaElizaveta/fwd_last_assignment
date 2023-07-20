import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/a5_sveltekit/', // Update with the correct repository name
    },
  },
  preprocess: preprocess(),
};

export default config;
