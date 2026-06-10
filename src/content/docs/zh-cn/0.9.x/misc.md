---
title: 杂项
description: 其它调整以及非调整
---

## 自动配方成就生成 📗

> 与 [RBIP](https://modrinth.com/mod/rbip) 完美兼容

默认情况下，解锁配方需要凑齐配方中的所有物品，但你可以根据个人偏好，让它能够在只获得其中一个物品的情况下解锁。此外，你还能禁用部分 ID 和关键字的物品的自动配方成就生成。默认情况下，minecraft（原版），andromeda（本模组）以及extshape（拓展方块形状）处于禁用状态。

此特性有下列配置项：

- 需要所有物品：启用时，玩家需要获得配方中的所有物品来解锁配方书中的对应配方。

- 无视未在配方书中解锁的配方：不为配方书中隐藏的配方生成成就。

- 关键字黑名单：此选项让你能够通过指定关键字（冒号前字符的一部分）来禁用其自动配方成就生成。

- ID 黑名单：此选项让你能够通过指定配方 ID 来禁用其自动配方成就生成。

## 小麻烦 💥

使玩家在受到任何伤害后爆炸 ❤️

## 兼容模式 🧩

通过不加载已被禁用选项的mixin，来提高本模组的兼容性。

这么做唯一的坏处是，每次修改这个模组的选项后，你都需要重启游戏。

## 翻译更新 🔁

尝试从github下载最新版的翻译文件。

这会下载你的所选语言以及英语（美国）。

## 上传可选数据 📊

上传分析性数据以分析人们是怎么使用这个模组的。

上传的数据：

- 模组版本。
- 游戏版本。
- 模组加载器（Quilt 或 Fabric）。

::: tip 提示
数据将被上传到欧洲的 Mixpanel 服务器。如果你禁用此选项，你的相关文件将会被要求删除。
:::

## 上传错误报告 📑

如果在栈跟踪中发现了“andromeda”，则上传客户端错误报告。

上传的数据：

- 栈跟踪。
- 特定的相关模组。
- 环境（服务端或客户端）。
- 平台（Fabric 或 Connector）

::: tip 提示
数据将被上传到欧洲的 Mixpanel 服务器。与分析数据不同，这些数据并不会有独特的 ID 作为标识。所有的数据都会以崩溃 UUID 的形式上传。 (`be4db047-16df-4e41-9121-f1e87618ddea`)
:::

## 启用特性管理器 🧩

不推荐关闭。它的用处是解决模组冲突。

::: details 特性管理器的运作细节…

特性管理器允许其他模组调整本模组的功能。

有如下两种与管理器交互的方法。

### 1. 使用 `fabric.mod.json`。

这可能是最简单的办法了，因为你甚至不需要导入这个模组。请注意，只有布朗值和特殊对象受支持。

在你的 `custom` 代码块中，你可以配置本模组的设置项。建议通过条件，来以对象定义特性。你必须指定 `value` ，其他的条件都是非必要的。

这里，你可以通过使用 fabric 的符号来决定版本。在 0.9.1 中，只支持 `minecraft` 和 `andromeda`。如果你需要其他的，欢迎提出请求，或者使用 entrypoint。

```json
    "andromeda:features": {
      "totemSettings.enableInfiniteTotem": {
        "minecraft": ">=1.19",
        "andromeda": "<=0.9.1",
        "value": true
      }
    }
```

还有一种更简单的方法。

```json
    "andromeda:features": {
      "totemSettings.enableInfiniteTotem": true
    }
```

### 2. 使用“andromeda:feature_manager”的 entrypoint。

在你的 `fabric.mod.json` 中，你可以定义 `andromeda:feature_manager` 这一 entrypoint：

```json
    "andromeda:feature_manager": [
      "org.example.my_cool_mod.compat.MyFeatureProcessors"
    ]
```

这一 entrypoint 在非常前期（在 mixin 插件的 `onLoad` 阶段）就执行了，所以记得不要去调用任何 mixinable 的类。

在你的处理器类中，你必须实现 Runnable 接口。

```java
public class MyFeatureProcessors implements Runnable {
    @Override
    public void run() {
        //processing, please wait...
    }
}
```

在这里，你可以通过使用 `AndromedaFeatureManager.registerProcessor`“注册”自定义处理器。你的处理器需要有一个独特的 ID。如果你希望改变设置项，你必须返回 null。

```java
public class MyFeatureProcessors implements Runnable {
    @Override
    public void run() {
        AndromedaFeatureManager.registerProcessor("my_cool_mod", config -> {
            if (FabricLoader.getInstance().getEnvironmentType() == EnvType.CLIENT) {
                return Map.of(
                        "tooltips.clock", false,
                        "tooltips.compass", false,
                        "tooltips.recoveryCompass", false
                );
            }
            return null;
        });
    }
}
```

同时，这一操作还会替换配置文件中 `andromeda.config.tooltip.manager.my_cool_mod` 的翻译键。所以，为了告诉玩家为什么他们不能自行改动那个设置项，记得添加对应的翻译键。

:::

## 启用调试信息 📃

开启后，你游戏的日志文件将会被数不清的条目淹没。别怪我没提醒过哦。

## ???
