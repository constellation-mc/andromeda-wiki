---
lang: en-US
title: Mechanics
description: Things and stuff idk
---

# Mechanics

## Linkart <Badge type="tip" text="^2.0.0" />

Allows linking minecarts together via chains. if this sounds familiar, this is [Linkart](https://www.curseforge.com/minecraft/mc-mods/linkart-updated) merged into Andromeda.

To link two minecarts, sneak+use on the parent minecart with a chain, then sneak+use on the child cart, now the child will follow its parent.

This option adds an `andromeda:linkers` tag, to allow using chains from other mods.

::: details configuration

| Config  | Description |
|---------|-------------|
| `pathfindingDistance` | The maximum distance a cart will follow its parent for. Carts will break apart if their distance is greater. |
| `velocityMultiplier` | Multiplies the speed of the following cart. |
| `distance` | The minimum spacing between carts. |
| `chunkloading` | Linked carts will load chunks as they move. |
| `chunkloadingRadius` | The radius of chunks that a given cart will load. |

:::

## Villager Gifting 🎁 <Badge type="tip" text="^0.9.0" />

Restore some reputation by giving gifts to villagers!

This option adds 4 new tags:
* `andromeda:villager_gifts/major_positive` gives 15 reputation
* `andromeda:villager_gifts/minor_positive` gives 3 reputation
* `andromeda:villager_gifts/major_negative` takes 15 reputation
* `andromeda:villager_gifts/minor_negative` takes 3 reputation

The defaults can be found here: [andromeda/tags/items/villager_gifts/](https://github.com/constellation-mc/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts)

## Dragon Fight Tweaks 🐉 <Badge type="tip" text="^0.6.0" />

### 1. Respawn Crystals

Destroyed end crystals will respawn after ~1.6 - 3 minutes. This makes the fight much harder and a bit more annoying.

### 2. Scale Health by Max Players

Scale the dragon's health based on the maximum number of players who have been to the end during the fight.

The formula is this: $(\sqrt{500 * x}) * 10$, where $x$ is the number of players.

### 3. Shorter Crystal Tracking Range

Reduce the range in which the dragon can heal itself with crystals from 32 blocks to 24 blocks.

### 4. Shorter Spikes

All newly generated spikes will be shorter.

## Wandering Trader Horn 🐐 <Badge type="tip" text="^0.4" />

Every 2 days, you can blow the "sing" horn to summon a wandering trader.

Please note that wandering traders will still spawn naturally

You can disable the "doTraderSpawning" gamerule if you don't want them to.


