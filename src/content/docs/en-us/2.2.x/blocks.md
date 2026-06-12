---
title: Blocks
description: Block related tweaks
---

## Falling Propagule

Fully grown, hanging propagules will fall after some time.

<auto-video width="1920" height="1080" alt="Time-lapse in a mangrove swamp where, after a few seconds, a mangrove propagule falls from its tree." src="/assets/videos/falling_propagule.webm"></auto-video>

## Cactus Bottle Filling 🌵

Lets you fill glass bottles with water using cacti.

The top cactus will break and drop a dead bush after 3 uses.

## Fletching Table Tweaks🏹

Tighten the string of your bow in the fletching table for improved accuracy.

<img alt="A screenshot of the Fletching GUI with a bow in the first slot, a string in the second, and an upgraded bow in the third. Below that, there's another bow with a tooltip that says '*Tightened, usages left: 7'." class="inline-image" src="/assets/images/fletching.png" width="412" height="389">

::: details configuration

| Config               | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `divergenceModifier` | Controls how hard an arrow will diverge from its target. $div * modifier$ |

:::

## Beds Explode Everywhere 🛏️💥

A joke tweak making beds explode in the overworld.

<auto-video width="1920" height="1080" alt="A video where a white bed explodes after the player right-clicks on it." src="/assets/videos/bed_explosion.webm"></auto-video>

## Bed Explosion Power 💥

:)

<auto-video width="1920" height="1080" alt="A video in which a white bed explodes with a large explosion and fire after the player right-clicks on it." src="/assets/videos/power_of_the_bed.webm"></auto-video>

## Guarded Loot 🛡

Have you ever raided a bastion? You may have noticed that it is very easy to dig under the chest and loot from underneath.

Well, this tweak forces you to kill every monster around the chest before you can loot it. Attempting to open the chest will highlight all the monsters you need to kill. Pretty RPG-esque!

In versions >1.7.0 you can prevent players from breaking guarded chests.

::: details configuration

| Config             | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `range`            | The range a mob must be in, to be considered a guard.          |
| `allowLockPicking` | Can a [Lockpick](./items#lockpick-%F0%9F%94%93) bypass guards? |
| `breakingHandler`  | Should guarded containers be unbreakable?                      |

:::

## Safe Beds 🛌

Beds will NOT explode when outside the overworld. Instead, sends the player a friendly message.

<img alt="A scene shows a red bed placed on end stone ground near the portal. Purple plants and Endermen are in the background. A message at the bottom reads 'You can't sleep here!' A shield and items are in the hot bar." class="inline-image" src="/assets/images/safe_beds.webp" width="520" height="293">

## Leaf Slowdown 🌿🐌 <Badge type="danger" text="Deprecated" />

Makes it harder to traverse biomes on trees by slowing entities down when they are on leaves.

## Campfire Effects 🔥♥️

Gives players configurable effects when they are within a certain range of a campfire.

<img alt="A screenshot showing a nighttime scene. A player stands near a campfire with smoke rising, surrounded by grass and trees. The player holds a piece of food in their right hand and a shield in their left. The HUD displays regeneration effect." class="inline-image" src="/assets/images/campfire_effects.webp" width="520" height="293">

::: details Data Pack options

This is configured using a data pack.

Create a file like `campfire.json` in `/data/[namespace]/andromeda/campfire_effects/`.

A basic example would look something like this, this is the default in Andromeda:

```json5
{
  // block identifier, often different from the item id!
  "minecraft:campfire": {
    "range": 10.0, // Range in blocks.
    "affectsPassive": true, // If passive entities should be affected, only players otherwise.
    "condition": {
      // Optional loot condition, global. supports 'origin', 'block_state', 'block_entity'
      "condition": "minecraft:block_state_property",
      "block": "minecraft:campfire",
      "properties": {
        "lit": "true"
      }
    },
    "effects": [
      {
        "effect": "minecraft:regeneration", // Effect identifier
        "amplifier": 0 // Effect amplifier.
        // "condition": Optional loot condition, per entity. supports the globals + 'this_entity'
      }
    ]
  }
}
```

All effects are rolled every 10 seconds. Only blocks that are campfires in the game code are supported.
so, on tick, it checks if 10 seconds passed, if so, test the global `condition`,
then collect entities in range, then for every entity, check the second `condition` and apply the effect.

:::
