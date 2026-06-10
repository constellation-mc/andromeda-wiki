import { VERSION_MAP, SEMVERS } from "./versions";
import type { CollectionEntry } from "astro:content";

export function parseEntryId(id: string) {
  const [locale, version, ...rest] = id.split("/");
  const isVersioned = VERSION_MAP.has(version);

  const rawPage = isVersioned ? rest.join("/") : [version, ...rest].join("/");

  return {
    locale,
    version: isVersioned ? version : null,
    page: rawPage.replace(/(\/|^)index$/, ""),
  };
}

export function resolveEntry(
  locale: string,
  targetVersion: string,
  page: string,
  available: Map<string, Set<string>>,
  lookup: Map<string, CollectionEntry<"docs">>,
  tombstones: Map<string, Set<string>>,
): { entry: CollectionEntry<"docs">; resolvedVersion: string } | null {
  const vIdx = SEMVERS.indexOf(targetVersion);
  const versions = available.get(`${locale}/${page}`);
  const dead = tombstones.get(page);
  for (let i = vIdx; i < SEMVERS.length; i++) {
    const v = SEMVERS[i];
    if (dead?.has(v)) return null;
    if (versions?.has(v)) {
      const entry = lookup.get(`${locale}/${v}/${page}`);
      if (entry) return { entry, resolvedVersion: v };
    }
  }
  return null;
}
