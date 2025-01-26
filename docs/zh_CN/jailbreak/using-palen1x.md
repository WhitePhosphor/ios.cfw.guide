---
lang: zh_CN
title: 使用 palen1x
excerpt: 通过 palen1x 安装 palera1n
permalink: /zh_CN/using-palen1x
pkgman: sileo
redirect_from:
  - /zh-CN/installing-palen1x
  - /zh-CN/using-palenix
  - /zh-CN/palen1x
  - /zh-CN/palenix
  - /zh-CN/using-palen1x-rootless
extra_contributors:
  - Mineek
  - nebula
  - ssalagginkool
---

::: danger

如果你尝试在 Windows 上使用虚拟机（比如 Virtualbox、VMWare、Windows Subsystem for Linux 等），按照本指南的步骤你将无法成功越狱。你需要一个可启动（bootable）的移动介质并使用该介质按照以下步骤进行操作。

:::

::: warning

如果你使用的是搭载了 AMD Ryzen CPU 的电脑，你可能会遇到问题。我们建议使用 Mac 或搭载了 Intel CPU 的电脑来按照本指南操作。

:::

palen1x 是一个可启动的 Linux 环境，可以让你快速在兼容 palera1n 的设备上运行 palera1n。palera1n 能够越狱 iOS 15.0 或更高版本的，搭载了 A8(X) 到 A11 SoC 芯片的 iOS 设备。

但是在 A11 设备上，你**必须禁用密码**，并且在进入原生 iOS 之前你无法使用密码或其他 SEP 功能。SEP 功能包括密码、Face ID/Touch ID 和 Apple Pay 等。

此外，如果你的设备是 iOS 16 的 A11 设备，并且之前设置了密码，你需要**抹掉所有内容和设置**才能进行越狱。

## 要求

- 一个 128MB 或更大的 USB 驱动器（也即上文提到的可移动介质）
    - 如果没有 USB 驱动器，但有其他形式的支持的可启动硬件（例如 CD 或 DVD），你可以使用它们代替 USB 驱动器
- 最新版本的 [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

## 安装 Ventoy

1. 下载并解压 `Ventoy.zip`
1. 插入你的 USB 驱动器并打开 `Ventoy2Disk.exe` 
1. 选择你用来启动 palen1x 的 USB 驱动器
    - **该 USB 驱动器将被格式化**
    - 确保事先备份所有重要数据
1. 点击 `Install` 并确认你同意格式化 USB 驱动器
    - 在过程完成之前不要弹出 USB 驱动器
1. 安装完成后，将下载的 palen1x iso 文件复制到 USB 驱动器上

## 启动 palen1x

1. 重启你的电脑，然后进入 BIOS 设置并禁用安全启动（Secure Boot），进入选择启动界面并选择你安装了 palen1x 的 USB 驱动器进行启动
    - 每台电脑进入 BIOS 的操作不同
    - 如果不确定如何进入 BIOS 设置，请搜索你的 PC 或主板品牌。
1. 在你看到 Ventoy 地界面后，按回车键启动 palen1x

## 运行 palera1n

::: warning

如果你使用 USB-C 转 Lightning 线进行下述过程，你可能会遇到你的 iOS 设备进入 DFU 模式的问题。

如果遇到问题，请使用 USB-A 转 Lightning 线，如果需要，还可以使用 USB-C 转 USB-A 适配器。

:::

1. 加载 palen1x 后，选择 `Shell`
1. 输入 `palera1n -l`
1. 按照屏幕上的说明进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>。

::: tip

搭载了 A9(X) 及更早型号芯片的设备在此过程中会卡在 pongoOS 中。要解决此问题，你需要执行以下操作：

1. 在终端窗口中，按键盘上的 `Control` + `C`
1. 重新运行刚才运行的命令

每次重新越狱设备时都需要这样做。

:::

设备启动后，打开 palera1n 并点击 `Sileo`。稍等片刻之后，会提示你设置用于命令行操作的密码，然后 `Sileo` 应该会出现在主屏幕上。

::: tip

要重新越狱设备，只需重新运行刚才运行的命令，然后重复你第一次越狱时所做过的步骤。

如果你使用的是 15.0 到 16.6.1 版本，你也可以 <router-link to="/installing-dopamine">安装 Dopamine</router-link> ，来使用一个永久签名的半完全越狱，这样可以在无需电脑的情况下重新越狱设备。

:::
