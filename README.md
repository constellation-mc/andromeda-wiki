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

## License

The [Code License](./LICENSE-code.txt) applies to all files in:

- `src/*`, but excluding `src/content/*`
- configuration files such as `.prettierrc`, `astro.config.mjs`, etc.

Other files not covered by the code licence are assumed to be under the [Assets License](./LICENSE-assets.txt)
unless owned by 3rd parties such as icons for other projects and badges from the [mini-badges](https://tangled.org/did:plc:rjhjcb3rgdsmdr6ykywuh63z/mini-badges) project.
