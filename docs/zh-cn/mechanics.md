---
lang: zh-CN
title: 机制
description: 一些机制，还有一些数不上名的小玩意
---

# 机制

## 友好送礼 🎁<Badge type="tip" text="^0.9.0" />

使玩家能够通过给村民送礼来恢复一定的声望值！

这一选项下有四个新增的标签：
* `andromeda:villager_gifts/major_positive` 下的物品将获得 15 点声望
* `andromeda:villager_gifts/minor_positive` 下的物品将获得 3 点声望
* `andromeda:villager_gifts/major_negative` 下的物品将扣除 15 点声望
* `andromeda:villager_gifts/minor_negative` 下的物品将扣除 3 点声望

你可以在这里 [andromeda/tags/items/villager_gifts/](https://github.com/constellation-mc/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts) 查看礼品预设。

## 末地龙战调整 🐉<Badge type="tip" text="^0.6.0" />

### 1. 末影水晶再生成

使末影水晶能够在大约 1.6-3 分钟后再生成。这会大幅提升战斗的难度，当然，也会更烦人一点。

### 2. 集群强化

根据最大在末地的玩家数量提升末影龙生命值。

计算公式：$(\sqrt{500 * x}) * 10$，$x$ 为最大玩家数量。

### 3. 更短的水晶治疗距离

将水晶的治疗距离由 32 降低至 24 格。

### 4. 更短的黑曜石柱

让新生成的黑曜石柱更短。

## 流浪商人号角 🐐<Badge type="tip" text="^0.4" />

每两天，你都能使用“歌颂”号角来召唤一位流浪商人。

值得注意的是，流浪商人仍然会自然生成。

你可以通过禁用 \"doTraderSpawning\" 的游戏规则，来禁用流浪商人自然生成。
