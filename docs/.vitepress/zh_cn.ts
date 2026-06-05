import { defineConfig } from "vitepress";
import { versions } from "./versions";

const baseFeatures = [
  { text: "主页", link: "/" },
  { text: "世界", link: "/world" },
  { text: "方块", link: "/blocks" },
  { text: "实体", link: "/entities" },
  { text: "物品", link: "/items" },
  { text: "Bug 修复", link: "/bug-fixes" },
  { text: "机制", link: "/mechanics" },
  { text: "GUI", link: "/gui" },
  { text: "杂项", link: "/misc" },
];

const baseMeta = [
  { text: "模组介绍", link: "/showcases" },
  { text: "附件", link: "/assets" },
];

const getVersionedSidebar = (versionPrefix: string = "") => {
  const prefix = versionPrefix ? `/zh-cn${versionPrefix}` : "/zh-cn";

  const mapLinks = (items: { text: string; link: string }[]) =>
    items.map(item => ({
      ...item,
      link: item.link === "/" ? `${prefix}/` : `${prefix}${item.link}`
    }));

  return [
    { text: "特性", items: mapLinks(baseFeatures) },
    { text: "Meta", items: mapLinks(baseMeta) }
  ];
};

export const zh_cn = defineConfig({
  lang: "zh-CN",
  title: "群星模组",
  description: "灿若繁星，包罗万象。",

  themeConfig: {
    sidebar: {
      "/zh-cn/": getVersionedSidebar(),
      ...Object.fromEntries(
        versions.map(v => [`/zh-cn/${v.semver}/`, getVersionedSidebar(`/${v.semver}`)])
      )
    },

    nav: [
      {
        text: `Versions`,
        items: versions.map((v) => ({
          text: `v${v.semver}`,
          link: v.semver === versions[0].semver ? "/zh-cn/" : `/zh-cn/${v.semver}/`
        })),
      },
    ],
  },
});