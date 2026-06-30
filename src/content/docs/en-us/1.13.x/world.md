---
title: World
description: World related tweaks
---

## Loot Barrels 💎

Add random barrels with loot to caves!

<img alt="A lantern placed on a barrel block inside a deepslate cave in Minecraft." class="inline-image" src="/assets/images/world_loot_barrels.webp" width="520" height="293">

By default, barrels will contain same loot as a village toolsmith. You should be able to change the loot and decorations by overriding the feature using a data pack!

## Moist Control 💦

Control farmland hydration range. As simple as that!

::: details configuration

| Config           | Description              | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
| ---------------- | ------------------------ | ----------------------------------------------------------------------- |
| `customMoisture` | Farmland hydration range | ✅                                                                      |

:::

## Self Planting Crops 🌾

If possible, plants will plant themselves after some time.

Based on [TinyTweaks](https://www.curseforge.com/minecraft/mc-mods/tinytweaks) by HephaestusDev

::: details configuration

| Config          | Description                                               |
| --------------- | --------------------------------------------------------- |
| `blacklistMode` | The option below will act as a blacklist.                 |
| `idList`        | List of item identifiers, controlled by the option above. |

:::

## Falling Bee Nests 🐝

Randomly, bee nests will fall from their trees, making the bees inside homeless & if a player is nearby, very angry.

<auto-video width="1920" height="1080" alt="Timelapse of a bee nest where it falls at the end." src="/assets/videos/bee_fall.webm"></auto-video>

It usually takes 0-2 days for a nest to fall.

Arrows also work!

<auto-video width="1920" height="1080" alt="The player shoots a bee nest, it falls." src="/assets/videos/bee_fall_arrow.webm"></auto-video>

## Temperature Based Crop Growth Speed 🌡️

When this option is on, plants will only grow in their preferred temperatures, e.g. cacti will only grow in deserts, nether and savannas.

This option is data-driven! Checkout [this](https://github.com/constellation-mc/andromeda/blob/4bf2d38ccc1c015418a6b8899dd9096cd743f68f/src/main/resources/data/andromeda/andromeda/crop_temperatures/crops.json) for an example and more info.

::: details configuration

| Config           | Description                        | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
| ---------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `affectBoneMeal` | Make Bone Meal follow temperatures | ✅                                                                      |

:::

## Fast Fire Spread 🔥 <Badge type="danger" text="Deprecated" />

::: warning Deprecated
This module is deprecated and will be removed in a future version.
:::

Fire will spread much faster and wider.
