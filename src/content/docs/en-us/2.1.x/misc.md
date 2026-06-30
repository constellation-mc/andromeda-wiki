---
title: Misc
description: Other tweaks and non-tweaks
---

## Tiny Storage 📦 <Badge type="warning" text="Experimental" />

Store items in the 2x2 crafting space!

By default, this option will follow the `keepInventory` game rule, but can be configured to always keep the items.

::: details configuration

| Config         | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| `transferMode` | Follow the `keepInventory` gamerule or always keep the items upon death |

:::

## Auto-generate Recipe Advancements 📗

> Totally goes well with [RBIP](https://modrinth.com/mod/rbip)

By default, all items are required to unlock a recipe, but you can choose to require only one item if you prefer. Additionally, you can blacklist certain IDs and namespaces from being generated. By default, the `minecraft`, `andromeda`, and `extshape` namespaces are blacklisted.

::: details configuration

| Config                               | Description                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| `requireAllItems`                    | Generated Advancements will require all items in the recipe to unlock. |
| `ignoreRecipesHiddenInTheRecipeBook` | Skip recipes that don't appear in the recipe book.                     |
| `namespaceBlacklist`                 | Don't generate Advancements for recipes with those namespaces.         |
| `recipeBlacklist`                    | Don't generate Advancements for recipes with those identifiers.        |

:::

## Minor Inconvenience 💥

Players will explode after taking any damage. Have fun! ❤️

## Auto-Update Translations 🔁

Download latest translations directly from GitHub.

This will download, if available, your currently selected language and EN-US.

::: details configuration

| Config    | Description                                 |
| --------- | ------------------------------------------- |
| `baseUrl` | The base URL used to download translations. |

The `baseUrl` option accept either the literal `default`, which resolves to the version's branch on GitHub,
or a URL, that is then combined with `[lang code].json` to request translation files, so the URL must end with `/`.

:::

## Data Pack Configs 🧩

Datapack configs work similarly to recipes, but instead of the path being a recipe ID, it's Andromeda's module ID. For example: `config/andromeda/world/moist_control.json` becomes `data/{pack id}/andromeda/scoped_config/world/moist_control.json`. These work like overlays, where only the specified options are modified.

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

`andromeda:default` is special key that is applied to all dimensions before their specific config. Here's a generic example:

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
