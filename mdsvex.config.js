import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
  
  layout: {
    default: "./src/layouts/default.svelte",
    post: "./src/layouts/post.svelte",
    page: "./src/layouts/page.svelte",
  },
});

export default config;
