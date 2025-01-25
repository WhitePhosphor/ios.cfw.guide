## 读前须知

::: tip

这个界面的阅读是可选的，但是如果你对越狱不是很熟悉，那么它值得一看。

:::

Cydia 是一个自 2008 年越狱兴起以来就被使用的包管理器，它可以用来安装调整包和系统主题。

![正在运行 Cydia 的 iPhone 图片](/assets/images/cydia_picture.jpg)

<p><router-link to="/faq/#what-are-tweaks">调整包（Tweaks）</router-link> 是对于系统的一些小的修改，可以改变系统的外观和使用体验。你可以在一些仓库中找到调整包，通常这些仓库被称为 "repos"。</p>

<p><router-link to="/faq/#what-s-a-repo">仓库（Repo）</router-link> 本质上是包含大量调整包的数据库。当你将仓库添加到 Cydia 时，你就可以安装其中的调整包，并使用搜索功能查找它们。</p>

本指南将向你展示如何安装和卸载调整包，以及如何添加不同的仓库。

## 添加仓库

1. 打开 Cydia 应用程序
1. 点击底部栏上的 `Sources`
1. 点击右上角的 `Edit` 按钮
1. 点击右上角的 `+` 图标
1. 输入仓库 URL（例如 [`https://sparkdev.me/`](https://sparkdev.me/)）
1. 点击 `Add Source`

现在你可以从此页面进入仓库，查看其中所有可用的调整包。

## 删除仓库

1. 打开 Cydia 应用程序
1. 点击底部栏上的 `Sources`
1. 点击左上角的 `Edit` 按钮
1. 点击你想删除的仓库旁边的红色图标
1. 确认删除

现在这个仓库应该已从 Cydia 中删除。

## 安装调整包

1. 打开 Cydia 应用程序
1. 搜索你想安装的调整包
1. 点击屏幕右上角的 `Install` 按钮
1. 确认安装
    - 安装调整包可能需要一些时间，这取决于你的网速和调整包的大小
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">重启 SpringBoard</router-link>"
    - 设备在此之后应该会刷新（Respring）
    - 有时，"重启 SpringBoard"可能不会显示，但你仍然可以点击按钮

该调整包现在应该已安装到你的设备上，并将在设备越狱时激活。

## 卸载调整包

1. 打开 Cydia 应用程序
1. 点击你想卸载的调整包
1. 点击页面顶部的 `Modify` 按钮
1. 点击 `Remove`
1. 确认卸载
    - 卸载调整包可能需要一些时间
2. 完成后，点击 "<router-link to="/faq/#what-is-respringing">重启 SpringBoard</router-link>"
    - 设备在此之后应该会刷新
    - 有时，"重启 SpringBoard"可能不会显示，但你仍然可以点击按钮

重启 SpringBoard 后，该调整包现在应该已从你的设备上卸载。
