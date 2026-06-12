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

## Self Planting Crops 🌾

If possible, plants will plant themselves after some time. It's possible to white/blacklist plants, 
the list is controlled by the `andromeda:auto_planting` tag, and the list mode is in the config.

Based on [TinyTweaks](https://www.curseforge.com/minecraft/mc-mods/tinytweaks) by HephaestusDev

## Falling Bee Nests 🐝

Randomly, bee nests will fall from their trees, making the bees inside homeless & if a player is nearby, very angry.

<auto-video width="1920" height="1080" alt="Timelapse of a bee nest where it falls at the end." src="/assets/videos/bee_fall.webm"></auto-video>

It usually takes 0-2 days for a nest to fall.

Arrows also work!

<auto-video width="1920" height="1080" alt="The player shoots a bee nest, it falls." src="/assets/videos/bee_fall_arrow.webm"></auto-video>

## Temperature Based Crop Growth Speed 🌡️

When this option is on, plants will only grow in their preferred temperatures, e.g. cacti will only grow in deserts, nether and savannas.

::: details Data Pack options

This feature supports adding/replacing temperatures using a data pack.

Create a file like `beetroots.json` in `/data/[namespace]/andromeda/crop_temperatures/`.

```json5
{
  // block identifier, often different from the item id!
  "minecraft:beetroots": {
    "temperatures": [
      0.2, // absolute minimum; won't grow below this; inclusive
      0.3, // minimum, will grow; but slowly; exclusive
      1.0, // maximum, will grow; but slowly; exclusive
      1.0, // absolute maximum; won't grow above this; inclusive
    ]
  }
}
```

:::

## Fast Fire Spread 🔥 <Badge type="danger" text="Deprecated" />

Fire will spread much faster and wider.
