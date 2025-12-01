---
lang: en-US
title: Blocks
description: Block related tweaks
---

# Blocks

## Falling Propagule <Badge type="tip" text="^0.6.0" />

Fully grown, hanging propagules will fall after some time.

<video alt="Time-lapse in a mangrove swamp where, after a few seconds, a mangrove propagule falls from its tree." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/falling_propagule.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Cactus Bottle Filling 🌵 <Badge type="tip" text="^0.6.0" />

Lets you fill glass bottles with water using cacti.

The top cactus will break and drop a dead bush after 3 uses.

## Fletching Table Tweaks🏹 <Badge type="tip" text="^0.3.1" />

Tighten the string of your bow in the fletching table for improved accuracy.

<img alt="A screenshot of the Fletching GUI with a bow in the first slot, a string in the second, and an upgraded bow in the third. Below that, there's another bow with a tooltip that says '*Tightened, usages left: 7'." style="display: block; margin-left: auto; margin-right: auto;" src="/images/fletching.png" width="412">

::: details configuration

| Config  | Description |
|---------|-------------|
| `divergenceModifier` | Controls how hard an arrow will diverge from its target. $div * modifier$ |

:::

## Beds Explode Everywhere 🛏️💥 <Badge type="tip" text="^0.1" />

A joke tweak making beds explode in the overworld.

<video alt="A video where a white bed explodes after the player right-clicks on it." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/bed_explosion.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Bed Explosion Power 💥 <Badge type="tip" text="^0.1" />

:)

<video alt="A video in which a white bed explodes with a large explosion and fire after the player right-clicks on it." style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/videos/power_of_the_bed.webm" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Guarded Loot 🛡 <Badge type="tip" text="^1.0.0" />

Have you ever raided a bastion? You may have noticed that it is very easy to dig under the chest and loot from underneath. 

Well, this tweak forces you to kill every monster around the chest before you can loot it. Attempting to open the chest will highlight all the monsters you need to kill. Pretty RPG-esque!

In versions >1.7.0 you can prevent players from breaking guarded chests.

::: details configuration

| Config  | Description |
|---------|-------------|
| `range` | The range a mob must be in, to be considered a guard. |
| `allowLockPicking` | Can a [Lockpick](/items#lockpick-%F0%9F%94%93) bypass guards? |
| `breakingHandler` | Should guarded containers be unbreakable? |

:::

## Safe Beds 🛌 <Badge type="tip" text="^0.1" />

Beds will NOT explode when outside the overworld. Instead, sends the player a friendly message.

<img alt="A scene shows a red bed placed on end stone ground near the portal. Purple plants and Endermen are in the background. A message at the bottom reads 'You can't sleep here!' A shield and items are in the hot bar." style="display: block; margin-left: auto; margin-right: auto;" src="/images/safe_beds.webp" width="520">

## Leaf Slowdown 🌿🐌 <Badge type="danger" text="Deprecated" /> <Badge type="tip" text="^0.1" />

Makes it harder to traverse biomes on trees by slowing entities down when they are on leaves.

## Campfire Effects 🔥♥️ <Badge type="tip" text="^0.1" />

Gives players configurable effects when they are within a certain range of a campfire.

<img alt="A screenshot showing a nighttime scene. A player stands near a campfire with smoke rising, surrounded by grass and trees. The player holds a piece of food in their right hand and a shield in their left. The HUD displays regeneration effect." style="display: block; margin-left: auto; margin-right: auto;" src="/images/campfire_effects.webp" width="520">

::: details configuration

| Config  | Description |
|---------|-------------|
| `affectsPassive` | Should the campfire affect passive mobs? |
| `effectsRange` | The range a campfire will give its effects in. |
| `effectList` | The list of effects. |

:::
