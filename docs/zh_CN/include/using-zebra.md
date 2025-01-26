## 读前须知

::: tip

如果你对越狱不是很熟悉，那么它值得一看。如果很熟悉的话你可以选择不看这个。

:::

Zebra 是一个较新的软件包管理器，同样，它可以用来安装插件系统主题。

<p><router-link to="/faq/#what-are-tweaks">插件Tweaks）</router-link> 是对于系统的一些小的修改，可以改变系统的外观和使用体验。你可以在一些仓库中找到插插件常这些仓库被称为 "repos"。</p>

<p><router-link to="/faq/#what-s-a-repo">仓库（Repo）</router-link> 本质上是包含大量插件数据库。当你将仓库添加到 Zebra 时，你就可以安装其中的插插件使用搜索功能查找它们。</p>

本指南将向你展示如何安装和卸载插件以及如何添加不同的仓库。

## 添加仓库

1. 打开 Zebra 应用程序
1. 点击底部栏上的 `Sources`
1. 点击左上角的 `+` 图标
1. 输入仓库 URL（例如 [`https://sparkdev.me/`](https://sparkdev.me/)）
1. 点击 `Add Source`

现在你可以从这个页面进入仓库，查看所有可用的插件

## 移除仓库

1. 打开 Zebra 应用程序
1. 点击底部栏上的 `Sources`
1. 将你想要移除的仓库向左滑动。

该仓库现在应该已从 Zebra 中移除。

## 安装插件

1. 打开 Zebra 应用程序
1. 搜索你想要安装的插件
1. 点击屏幕右上角的 `Install` 按钮
    - 如果出现提示询问你要安装哪个版本，通常你需要安装最新版本
1. 点击屏幕底部的 "Tap to Manage"
1. 点击屏幕右上角的 `Confirm` 按钮
    - 安装插件能需要一些时间
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">重启 SpringBoard</router-link>"
    - 设备在此之后应该会刷新（Respring）
    - 有时，"重启 SpringBoard"可能不会显示，但你仍然可以点击按钮

插件在应该已安装到你的设备上，并将在设备越狱时激活。

## 卸载插件

1. 打开 Zebra 应用程序
1. 点击底部栏上的 `Packages`
1. 将你想要卸载的插件左滑动。
1. 点击屏幕底部的 "Tap to Manage"
1. 点击屏幕右上角的 `Confirm` 按钮
    - 卸载插件能需要一些时间
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">重启 SpringBoard</router-link>"
    - 设备在此之后应该会刷新（Respring）
    - 有时，"重启 SpringBoard"可能不会显示，但你仍然可以点击按钮

重启 SpringBoard 后，插件在应该已从你的设备上卸载。
