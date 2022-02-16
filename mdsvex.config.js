import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkFootnotes from "remark-footnotes";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [remarkFootnotes],
  rehypePlugins: [],
});

export default config;
