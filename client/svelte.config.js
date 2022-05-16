import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import removeConsole from 'vite-plugin-svelte-console-remover';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [removeConsole()],
    }
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
