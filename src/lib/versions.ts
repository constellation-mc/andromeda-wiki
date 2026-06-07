export type Version = {
  semver: string;
  categories: string[];
};

const CATEGORIES = [
  "world",
  "blocks",
  "entities",
  "items",
  "bug-fixes",
  "mechanics",
  "gui",
  "misc",
];

export const VERSIONS: Version[] = [
  {
    semver: "2.1.x",
    categories: CATEGORIES,
  },
  {
    semver: "1.13.x",
    categories: CATEGORIES,
  },
];

export const VERSION_MAP: Map<string, Version> = new Map();
VERSIONS.forEach((v) => VERSION_MAP.set(v.semver, v));
