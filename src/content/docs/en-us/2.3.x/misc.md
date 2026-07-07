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

## Config System 📂

The base config files can be found in the `minecraft/configs/andromeda` folder. All configs are split per-module, besides a special `mod.json`, which has configs for the entire mod.

Most configs will look something like this:

```json
{
  "bootstrap": {
    "enabled": false
  },
  "main": {
  },
  "game": {
  },
  "client": {
  }
}
```

The `bootstrap` block controls if a module should be loaded at all 
(indicated by "loading X modules" in the game logs). All modules have this option. 
If a module cannot load for some reason, the mod will log the "forced module" state.

The `main` block controls global module configs, such as item registrations and other things which are usually not 
expected to change during a play session. Most configs in this category must be synced between a server and client, and usually require a restart to apply.

The `game` block controls options that apply for stuff that happens in a world, during a play session. 
Unlike the `main` block, these options are only required on the server (logical, works in singleplayer too). 
Due to the nature of those options, they support overrides via [Data Packs](#data-pack-configs), per-dimension. 
Some `game` configs support `available`, which act as `bootstrap.enabled`, but during gameplay, 
so a module could be bootstrapped, but most logic in it is disabled.

The `client` block controls options that are only relavant on the client, 
and such are not required, or supported on the server.
Usually related to visual stuff.

Client-side modules and `client` config blocks will never be created, read or written on the dedicated server (multiplayer).

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
