import { defineConfig } from "vitepress";
import { versions } from "./versions";

const baseFeatures = [
  { text: "Home", link: "/" },
  { text: "World", link: "/world" },
  { text: "Blocks", link: "/blocks" },
  { text: "Entities", link: "/entities" },
  { text: "Items", link: "/items" },
  { text: "Bug Fixes", link: "/bug-fixes" },
  { text: "Mechanics", link: "/mechanics" },
  { text: "GUI", link: "/gui" },
  { text: "Misc", link: "/misc" },
];

const baseMeta = [
  { text: "Showcases", link: "/showcases" },
  { text: "Assets", link: "/assets" },
];

const getVersionedSidebar = (versionPrefix: string = "") => {
  const prefix = versionPrefix ? `/${versionPrefix}` : "";

  const mapLinks = (items: { text: string; link: string }[]) =>
    items.map((item) => ({
      ...item,
      link: item.link === "/" ? `${prefix}/` : `${prefix}${item.link}`,
    }));

  return [
    { text: "Features", items: mapLinks(baseFeatures) },
    { text: "Meta", items: baseMeta },
  ];
};

export const en = defineConfig({
  lang: "en-US",
  title: "Andromeda",
  description:
    "A galaxy is a collection of things and systems. So is this mod.",

  themeConfig: {
    sidebar: {
      "/": getVersionedSidebar(),
      ...Object.fromEntries(
        versions.map((v) => [`/${v.semver}/`, getVersionedSidebar(v.semver)]),
      ),
    },

    nav: [
      {
        text: "Versions",
        items: versions.map((v) => ({
          text: `v${v.semver}`,
          link: v.semver === versions[0].semver ? "/" : `/${v.semver}/`
        })),
      },
    ],
  },
});
