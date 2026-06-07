// @ts-check
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkFlexibleContainers from "remark-flexible-containers";
import rehypeRaw from "rehype-raw";
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { h } from "hastscript";
import { visit } from "unist-util-visit";
import sitemap from "@astrojs/sitemap";

const rehypeTrimTrailingDashes = () => (tree) => {
  const walk = (node) => {
    if (
      node.type === "element" &&
      ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)
    ) {
      if (node.properties && typeof node.properties.id === "string") {
        node.properties.id = node.properties.id.replace(/-+$/, "");
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  walk(tree);
};

function rehypeLazyImages() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img") {
        node.properties.loading = "lazy";
        node.properties.decoding = "async";
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://andromeda.zenfyr.dev",

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkFlexibleContainers],
      rehypePlugins: [
        rehypeRaw,
        rehypeLazyImages,
        rehypeKatex,
        rehypeSlug,
        rehypeTrimTrailingDashes,
        [
          rehypeAutolinkHeadings,
          { behavior: "prepend", content: h("span.heading-anchor", "#") },
        ],
      ],
    }),
  },

  integrations: [sitemap()],
});
