---
title: Items
description: Item related tweaks
---

# Items

## Pouches 🌱🌺🌳

A collection of plant-themed pouches!

- <img class="pixelated" src="/assets/images/icons/seed_pouch.png" width="35" height="35"> Seed Pouch: Contains various seeds (and berries). [Loot table](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/seeds.json)
- <img class="pixelated" src="/assets/images/icons/flower_pouch.png" width="35" height="35"> Flower Pouch: Contains common types of flowers. [Loot table](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/flowers.json)
- <img class="pixelated" src="/assets/images/icons/sapling_pouch.png" width="35" height="35"> Sapling Pouch: Contains common sapling types. [Loot table](https://github.com/melontini/andromeda/blob/1.20-fabric/src/main/resources/data/andromeda/loot_tables/pouches/saplings.json)
- <img class="pixelated" src="/assets/images/icons/special_pouch.png" width="35" height="35"> Special Pouch: This pouch doesn't have it's own table, but can be configured using the `CustomLootId` NBT entry. Set to seeds by default. (provided loot table has no context!)

## Magnet 🧲

<br/>
<img alt="Image of an in-game menu showing a magnet item at level 2 out of 5, with various materials displayed including redstone, lapis lazuli, emerald, diamond, gold ingot, copper, quartz, and coal." style="display: block; margin-left: auto; margin-right: auto;" src="/assets/images/magnet.png" width="300">

- This special magnet allows you to select items you want to attract.
- Can be upgraded 4 additional times by left-clicking with a Heart of the Sea.
- Crafted from Heart of the Sea, 4 Copper Ingots and 2 Redstone.

::: details configuration

| Config            | Description               | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
| ----------------- | ------------------------- | ----------------------------------------------------------------------- |
| `rangeMultiplier` | $level * rangeMultiplier$ | ✅                                                                      |

:::

## Tooltips 💬

<br/>
<img alt="A display of three items: a Compass showing a distance to spawn of 2.4, a Clock indicating the current time as 09:06, and a Recovery Compass showing a distance to the last death spot of 7.5." style="display: block; margin-left: auto; margin-right: auto;" src="/assets/images/tooltips.png" width="500">

Adds more useful info to various tooltips. You can enable/disable each one.

- Clock. Shows current in-game time.
- Compass. Shows distance to compass' target.
- Recovery Compass. Shows distance to the last death spot.

## Lockpick 🔓

A creative only item that allows you to open things you shouldn't.

As of 0.7.0 you can pick:

- Villager inventories.

::: details configuration

| Config          | Description                         | [Expressions](https://constellation-mc.github.io/commander/Expressions) |
| --------------- | ----------------------------------- | ----------------------------------------------------------------------- |
| `chance`        | The chance for a lockpick to break. | ✅                                                                      |
| `breakAfterUse` | Should lockpicks break after use?   | ✅                                                                      |

:::

## Slightly Better Item Names ⚒⛏

Show item durability (in %) if durability is < 100% or item count if count is > 1

<img style="display: block; margin-left: auto; margin-right: auto;" src="/assets/images/item-names.png" width="350">

## Infinite Totem of Undying ♾️♥️

<br/>
<img alt="A Minecraft beacon is shown on a structure made of diamond and netherite blocks at night. The beacon emits a bright vertical beam of light into the sky, and a glowing item frame is displayed beside it, there's a yellow totem with glowing white eyes in it. The surrounding area includes grass and trees under a dark sky." style="display: block; margin-left: auto; margin-right: auto;" src="/assets/images/infinite-totem.webp" width="520">

<sub>Works the same way as normal totem, but infinitely...</sub>

To get one of these "totally not OP" totems, you need to have a level 4 beacon made from diamond and netherite blocks.

The beacon must follow this pattern:

```
    B
   NNN
  DDDDD
 NNNNNNN
DDDDDDDDD
```

Where N is netherite and D is diamond.

Now throw a nether star and a totem onto the beacon and watch them ascend.

You can also disable ascension in the config and create your own way to get the totem!

## Balanced Mending ⚒️

Balances mending a bit, by making it remove the "Too Expensive" error instead of repairing items via XP.

Also sets anvil's XP cap to 40 levels, but not really because the cap is 40 + the amount of repair items.

Inspired by TheMisterEpic's "This Minecraft Enchantment has been BROKEN for 3 YEARS..." video

## Minecart Block Picking 🥒

Allows you to "pick up" blocks using minecarts. All contents and some properties are copied to the cart.

For the sake of balance, you can configure whether players can "pick up" spawners.

<video style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" width="520" muted autoplay loop>
  <source src="/assets/videos/minecart-block-picking.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
