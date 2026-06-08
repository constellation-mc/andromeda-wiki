# Andromeda Wiki

The Andromeda wiki written with [Astro](https://astro.build/)
and the design based on [VitePress](https://vitepress.dev/).

Supports languages and folder-based versions.

The wiki can function completely without JS enabled by using modern css features and `#` url tricks.
Some JS is used to lazy-load autoplaying videos (has a `noscript` fallback) and hover for the version switch.
(can be clicked if no JS)

## Translations

All UI element translation files are in `src/content/lang.json`.
Wiki pages/docs are in `src/content/docs/[lang]/[version]`.
