## 必读内容

::: tip

每个在这里链接的界面都是选读的。但是如果你不熟悉越狱的话，这些界面对你来说会很有用。

:::

nitoTV 是一个自 Apple TV 设备能够越狱开始就已经在使用的包管理器。它可以用来安装插件、实用工具、工具和其他必需品。

![Apple TV 运行 nitoTV 的图片](/assets/images/nitotv_picture.png)

<p><router-link to="/faq/#what-are-tweaks">插件（Tweaks）</router-link> 是对于系统的一些小的修改，可以改变系统的外观和使用体验。你可以在一些仓库中找到插件，通常这些仓库被称为 "repos"。</p>

<p><router-link to="/faq/#what-s-a-repo">仓库（Repo）</router-link> 本质上是包含大量插件的数据库。当你将仓库添加到 Cydia 时，你就可以安装其中的插件，并使用搜索功能查找它们。</p>

:::

请注意，大多数 iOS 仓库不适用于 tvOS！

:::

本指南将向你展示如何安装和卸载插件，以及添加不同的仓库。

:::

本指南适用于 Apple TV 4（或更高版本）设备

:::

## 添加仓库

1. 打开 nitoTV 应用程序
1. 选择并进入顶部栏上的 `Sources`
1. 点击下面的 `Add` 按钮
1. 输入仓库 URL（例如 [`https://sparkdev.me/`](https://sparkdev.me/)）。这也可以通过 iPhone/iPad 键盘完成。
1. 点击 `Okay`

现在你可以从此页面进入仓库，查看所有可用的插件。

## 删除仓库

1. 打开 nitoTV 应用程序
1. 选择并进入到顶部栏上的 `Sources`
1. 使用触控板，点击并按住仓库一秒钟，然后释放。
1. 点击 `Remove`

该仓库现在应该从 nitoTV 中删除。

## 安装插件

1. 打开 nitoTV
1. 搜索你想安装的插件
1. 点击插件名称下方的 `Get` 按钮
1. 在提示时点击 `Install` 以确认安装
    - 安装插件可能需要一些时间
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - 设备应在此之后刷新
    - 有时，按钮可能不会显示 Respring，但你仍然可以点击按钮

插件现在应该安装到你的设备上，并且在设备越狱时会自动激活。

## 卸载插件

1. 打开 nitoTV 应用程序
1. 转到顶部栏上的 `Installed` 按钮
1. 点击列表中的插件
1. 点击插件名称下方的 `Modify`
1. 在提示时点击 `Remove` 以确认卸载
    - 卸载插件可能需要一些时间
1. 完成后，点击 "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - 设备应在此之后刷新
    - 有时，按钮可能不会显示 Respring，但你仍然可以点击按钮

刷新后，插件现在应该已从设备中卸载。
