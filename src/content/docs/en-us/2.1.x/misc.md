---
title: Misc
description: Other tweaks and non-tweaks
---

## Tiny Storage 📦 <Badge type="warning" text="Experimental" />

Store items in the 2x2 crafting space!

By default, this option will follow the `keepInventory` game rule, but can be configured to always keep the items.

## Auto-generate Recipe Advancements 📗

> Totally goes well with [RBIP](https://modrinth.com/mod/rbip)

By default, all items are required to unlock a recipe, but you can choose to require only one item if you prefer. Additionally, you can blacklist certain IDs and namespaces from being generated. By default, the minecraft, andromeda, and extshape namespaces are blacklisted.

The following configuration options are available:

- Require All Items: When this option is enabled, players must find all items in a recipe before it is unlocked in the recipe book.

- Ignore Recipes Hidden in the Recipe Book: Enabling this option will prevent the generation of advancements for recipe types that are hidden in the recipe book.

- Blacklisted Namespaces: This option allows you to specify namespaces (part of an ID before `:`) to be excluded from advancement generation.

- Blacklisted IDs: This option allows you to specify recipe IDs to be excluded from advancement generation.

## Minor Inconvenience 💥

Players will explode after taking any damage. Have fun! ❤️

## Auto-Update Translations 🔁

Download latest translations directly from GitHub.

This will download, if available, your currently selected language and EN-US.

## Data Pack Configs 🧩

Datapack configs work similarly to recipes, but instead of the path being your recipe ID, it's Andromeda's module ID. For example: `config/andromeda/world/moist_control.json` becomes `data/{pack id}/andromeda/scoped_config/world/moist_control.json`. These work like overlays, where only the specified options are modified.

Only `game` configs can be overriden using data packs!

Here's an example config that changes farmland moisture:

```json
{
  "minecraft:the_nether": {
    "customMoisture": 0
  },
  "minecraft:the_end": {
    "customMoisture": 1
  },
  "minecraft:overworld": {
    "customMoisture": 3
  }
}
```

Andromeda 1.4.2 introduces `andromeda:default`. A special key that is applied to all dimensions before their specific config. Here's a generic example:

```json
{
  "andromeda:default": {
    "available": false
  },
  "minecraft:the_end": {
    "available": true
  }
}
```

All per-world and per-dimension configs can be reloaded using `/reload`!

## ???
