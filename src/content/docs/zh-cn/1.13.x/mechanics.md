---
title: 机制
description: 一些机制，还有一些数不上名的小玩意
---

# 机制

## 友好送礼 🎁

使玩家能够通过给村民送礼来恢复一定的声望值！

这一选项下有四个新增的标签：

- `andromeda:villager_gifts/major_positive` 下的物品将获得 15 点声望
- `andromeda:villager_gifts/minor_positive` 下的物品将获得 3 点声望
- `andromeda:villager_gifts/major_negative` 下的物品将扣除 15 点声望
- `andromeda:villager_gifts/minor_negative` 下的物品将扣除 3 点声望

你可以在这里 [andromeda/tags/items/villager_gifts/](https://github.com/melontini/andromeda/tree/1.19-fabric/src/main/resources/data/andromeda/tags/items/villager_gifts) 查看礼品预设。

## 末地龙战调整 🐉

### 1. 末影水晶再生成

使末影水晶能够在大约 1.6-3 分钟后再生成。这会大幅提升战斗的难度，当然，也会更烦人一点。

### 2. 集群强化

根据最大在末地的玩家数量提升末影龙生命值。

计算公式：$(\sqrt{500 * x}) * 10$，$x$ 为最大玩家数量。

### 3. 更短的水晶治疗距离

将水晶的治疗距离由 32 降低至 24 格。

### 4. 更短的黑曜石柱

让新生成的黑曜石柱更短。

## 可投掷物品 🥏

[![需要命令官模组](https://raw.githubusercontent.com/constellation-mc/commander/documentation/docs/public/badges/requires/compacter_vector.svg)](https://modrinth.com/mod/cmd)

使一些 本来可能用不上\* 的物品变得可投掷。

::: details 0.5.0 版本中，可投掷的物品

- 骨粉
- 墨囊和发光墨囊
- 所有染料
- 普通砖头和下界砖
- 火焰弹
- 火药

欢迎提供新点子！

:::

现在有一个新的选项：僵尸能否投掷物品？

若启用，僵尸将能够投掷它们所拾起的可投掷物品。

::: details 添加自定义投掷行为
数据包能做的很有限，只能执行命令和生成带颜色的粒子（就像墨囊和染料那样）。

所有自定义行为需要和 `recipes`, `tags`, `loot_tables` 一块，放置在数据包的 `andromeda/item_throw_behavior` 文件夹下，文件名任取。
1.10.0 版本开始，这个特性通过[命令官](https://modrinth.com/mod/cmd)模组来实现其功能。你可以在它的维基上了解到命令、表达式等的用法。https://constellation-mc.github.io/commander/zh-cn/

例子：

```json
{
  "items": "minecraft:ink_sac",
  "complement": true,
  "events": [
    {
      "event": "any",
      "commands": {
        "type": "andromeda:particles",
        "selector": "minecraft:direct_killer_entity",
        "colors": [24, 27, 50]
      }
    },
    {
      "event": "entity",
      "commands": {
        "type": "commander:commands",
        "selector": "minecraft:this_entity",
        "commands": [
          "/effect give @s minecraft:blindness $(long){{random(4, 7)}} 0 true"
        ]
      }
    }
  ]
}
```

`events` 是一系列对投掷物实体事件的迷你订阅（监听）。

| 事件     |                        |
| -------- | ---------------------- |
| `block`  | 击中方块时执行         |
| `entity` | 击中实体时执行         |
| `miss`   | 错过目标时执行         |
| `any`    | 在以上所有事件之后执行 |

`commands` 是一系列[命令官模组中的命令](https://constellation-mc.github.io/commander/zh-cn/Commands)。

其他：

| 参数               |                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| `override_vanilla` | 若为 true，阻止**所有**原版行为。不推荐用于方块物品，因为你会无法放置它们                              |
| `disabled`         | 阻止该物品的所有行为                                                                                   |
| `complement`       | 若为 false，阻止该物品的所有非投掷行为                                                                 |
| `cooldown`         | 设置投掷冷却（刻）。接受数字与[表达式](https://constellation-mc.github.io/commander/zh-cn/Expressions) |

:::

## 流浪商人号角 🐐

每两天，你都能使用“歌颂”号角来召唤一位流浪商人。

值得注意的是，流浪商人仍然会自然生成。

你可以通过禁用 \"doTraderSpawning\" 的游戏规则，来禁用流浪商人自然生成。
