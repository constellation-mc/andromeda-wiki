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
import { LOCALES, DEFAULT_LOCALE, normalizeLangTag } from "./src/lib/i18n";

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

export function rehypeAutoVideo() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "auto-video" && parent && index !== undefined) {
        const src = node.properties.src;
        const alt = node.properties.alt;
        if (!src) return;

        const lazyVideo = {
          type: "element",
          tagName: "video",
          properties: {
            className: ["inline-video", "lazy-video"],
            alt: alt,
            loading: "lazy",
            loop: true,
            muted: true,
            playsInline: true,
          },
          children: [
            {
              type: "element",
              tagName: "source",
              properties: { dataSrc: src, type: "video/webm" },
            },
          ],
        };

        const noscript = {
          type: "element",
          tagName: "noscript",
          properties: {},
          children: [
            {
              type: "element",
              tagName: "video",
              properties: {
                className: ["inline-video"],
                alt: alt,
                loading: "lazy",
                loop: true,
                muted: true,
                playsInline: true,
                autoplay: true,
              },
              children: [
                {
                  type: "element",
                  tagName: "source",
                  properties: { src, type: "video/webm" },
                },
              ],
            },
          ],
        };

        parent.children.splice(index, 1, lazyVideo, noscript);
        return [visit.SKIP, index];
      }
    });
  };
}

const locales = {};
LOCALES.forEach((locale) => (locales[locale] = normalizeLangTag(locale)));

// https://astro.build/config
export default defineConfig({
  site: "https://andromeda.zenfyr.dev",

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkFlexibleContainers],
      rehypePlugins: [
        rehypeRaw,
        rehypeLazyImages,
        rehypeAutoVideo,
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

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: locales,
      },
    }),
  ],
});
