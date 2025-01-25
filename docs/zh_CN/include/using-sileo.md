## 读前须知

::: tip

如果你对越狱不是很熟悉，那么它值得一看。如果很熟悉的话你可以选择不看这个。

:::

Sileo 是一个相当现代化的包管理器。它具有重新设计过的 UI，适用于 iOS 11 及以上版本。你可以理解为它是所有可用的调整包和主题的应用商店。

<p><router-link to="/faq/#what-are-tweaks">调整包（Tweaks）</router-link> 是对于系统的一些小的修改，可以改变系统的外观和使用体验。你可以在一些仓库中找到调整包，通常这些仓库被称为 "repos"。</p>

<p><router-link to="/faq/#what-s-a-repo">仓库（Repo）</router-link> 本质上是包含大量调整包的数据库。当你将仓库添加到 Sileo 时，你就可以安装其中的调整包，并使用搜索功能查找它们。</p>

本指南将向你展示如何安装和卸载调整包，以及如何添加不同的仓库。

## 添加仓库

1. 打开 Sileo 应用程序
1. 点击底部栏上的 "Sources"
1. 点击右上角的 "+" 图标
1. 输入仓库 URL（例如 [`https://sparkdev.me/`](https://sparkdev.me/)）
1. 点击 "Add Source"

现在你可以从此页面进入仓库，查看其中所有可用的调整包。

## 删除仓库

1. 打开 Sileo 应用程序
1. 点击底部栏上的 "Sources"
1. 点击左上角的 "Edit" 按钮
1. 点击你想删除的仓库旁边的红色图标
1. 确认删除

该仓库现在应该已从 Sileo 中删除。

## 安装调整包

1. 打开 Sileo 应用程序
1. 搜索你想安装的调整包
1. 点击页面顶部的 "Get" 按钮
    - 屏幕底部应出现一个标有 "Queued" 的栏
1. 点击该栏并按 "Confirm"
    - 安装调整包可能需要一些时间
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - 设备在此之后应该会刷新（Respring）
    - 有时，"重启 SpringBoard"可能不会显示，但你仍然可以点击按钮

该调整包现在应该已安装到你的设备上，并将在设备越狱时激活。

## 卸载调整包

1. 打开 Sileo 应用程序
1. 点击你想卸载的调整包
1. 点击页面顶部的 "Modify" 按钮
1. 点击 "Remove"
    - 屏幕底部应出现一个标有 "Queued" 的栏
1. 点击该栏并按 "Confirm"
    - 卸载调整包可能需要一些时间
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - 设备在此之后应该会刷新（Respring）
    - 有时，"重启 SpringBoard"可能不会显示，但你仍然可以点击按钮

重新启动后，该调整包现在应该已卸载。

## 登录仓库

一些仓库要求你登录才能下载它们的调整包（例如 [`https://havoc.app/`](https://havoc.app/)，[`https://chariz.com/`](https://chariz.com/)），这可以通过以下步骤完成：

1. 打开 Sileo 应用程序
1. 点击底部栏上的 "Featured"
1. 点击屏幕右上角的个人资料图标
1. 在 "Payment Providers" 下点击你想登录的仓库
1. 按提示登录

你现在应该能够下载你登录的仓库中的调整包。

::: tip

如果你在安装或删除包时遇到错误，请阅读 <router-link to="/troubleshooting/#fixing-package-installation-errors-on-sileo">故障排除</router-link> 页面

:::
