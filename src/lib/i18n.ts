import { DEFAULT_VERSION } from "./versions";
import translationsData from "../content/lang.json" with { type: "json" };

type Translations = Record<string, Record<string, string>>;
const translations = translationsData as Translations;

export const LOCALES = ["en-us", "zh-cn"] as const;
export const DEFAULT_LOCALE = LOCALES[0];

export function buildUrl(
  locale?: string,
  version?: string,
  page?: string,
): string {
  const parts: string[] = [];
  if (locale && locale !== DEFAULT_LOCALE) parts.push(locale);
  if (version && version !== DEFAULT_VERSION.semver) parts.push(version);
  if (page) parts.push(page);
  return "/" + parts.join("/") + (parts.length > 0 ? "/" : "");
}

export function buildKey(
  locale: string,
  version: string | undefined,
  page?: string,
): string {
  const parts: string[] = [locale];
  if (version) parts.push(version);
  parts.push(page || "index");
  return parts.join("/");
}

export function t(locale: string, key: string): string {
  const current = translations[locale.toLowerCase()];
  const base = translations["en-us"];
  return key in current ? current[key] : base[key];
}

export function normalizeLangTag(tag: string): string {
  const [lang, script, region] = tag.split("-");
  return [
    lang?.toLowerCase(),
    script?.length === 4
      ? script[0].toUpperCase() + script.slice(1).toLowerCase()
      : script?.toUpperCase(),
    region?.length === 2 ? region.toUpperCase() : region?.toLowerCase(),
  ]
    .filter(Boolean)
    .join("-");
}
