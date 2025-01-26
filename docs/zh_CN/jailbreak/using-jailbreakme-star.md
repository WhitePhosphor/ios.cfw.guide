---
lang: zh_CN
title: 使用 JailbreakMe Star
description: JailbreakMe (Star) 使用指南
permalink: /zh_CN/using-jailbreakme-star
redirect_from:
  - /zh-CN/zh-CN/installing-jailbreakme-star
  - /zh-CN/zh-CN/installing-star
  - /zh-CN/zh-CN/star
  - /zh-CN/zh-CN/jailbreakme-star
discordNoticeText: 如果需要英语帮助可以在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/) 上提问。
pkgman: cydia
extra_contributors:
  - WhitetailAni
---

JailbreakMe Star 可以越狱所有运行着 iPhone OS 3.1.2 到 iOS 4.0.1 的设备，除了运行 iPhone OS 3.2.2 的第一代 iPad。

JailbreakMe Star 是完美越狱，这意味着它在重启后仍然有效。出现问题可能会导致无限启动循环。如果遇到启动循环，请通过 iTunes、访达（macOS Catalina 及更新版本）或 FutureRestore 恢复设备。

## 运行 JailbreakMe Star

1. 在你的 iOS 设备上打开 Safari
1. 访问 [jailbreakme.com](http://jailbreakme.com) 网站
1. 将 “Slide to jailbreak” 滑块向右滑动到底

几分钟后 Cydia 应该会出现在你的主屏幕上。

## 修补 Cydia

::: danger

如果你的设备运行的是 iOS 4 或更高版本的系统，请跳过这些步骤。

:::

1. 打开 Cydia 并选择 `Developer (No Filters)`
1. 等待数据重新加载（可能需要很长时间，请确保设备不会进入睡眠状态）
1. 当提示进行必要升级时，选择 `Complete Upgrade`（同样，确保设备不会进入睡眠状态）
1. 完成后，点击 `Close Cydia (Restart)`
1. Cydia 重启后，等待它重新加载数据，并**忽略任何关于不受信任服务器证书的错误**
1. 转到源标签，点击 `Edit`，然后点击 `Add`
1. 输入 `http://cydia.invoxiplaygames.uk/`，等待右上角出现 `Close`
1. 点击新添加的 `IPG's Cydia Repo`，然后点击 `Tweaks`，找到 `Cydia HTTPatch`
1. 点击 `Install`，然后点击 `Confirm`，等待右上角出现 `Close`
1. Cydia 将关闭，现在应该已经完全修补。

你现在应该可以使用 Cydia 安装 <router-link to="/faq/#what-are-tweaks">插件</router-link>、主题了。
