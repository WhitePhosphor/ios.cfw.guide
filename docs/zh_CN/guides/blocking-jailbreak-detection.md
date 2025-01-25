---
lang: zh_CN
title: "阻断越狱检测"
description: 绕过并避免越狱检测
permalink: /blocking-jailbreak-detection
redirect_from:
  - /blocking
  - /jailbreak-detection
extra_contributors:
  - Absolucy
  - TheHacker894
---

::: danger

我们并不建议在越狱设备上使用与金融有关的应用，比如支付宝和各大银行的应用。如果有能力的话，尽量用另一台设备来使用这些应用。

:::

许多注重安全性的应用程序会有算法来检测并阻止越狱用户使用这些应用程序。这些应用包括各大银行的应用程序、一些在线游戏（例如 Pokemon Go、Mario Kart Tour）以及其他注重隐私的应用程序，如 Snapchat。

从安全角度来看，这的确是一个好的操作，毕竟越狱设备比原生 iOS 设备更容易被攻破。然而，当我们只是想使用一些必要的应用程序时，这可能会成为一个问题。

::: danger

Blocking jailbreak detection can stop you from accessing photos and other files while in selected applications.

:::

Now, we'll go through each tweak that can be used to minimize jailbreak detection. Some apps, however, cannot be patched and will not work when jailbroken, regardless of the content below. Other apps may need bypasses made specifically for them.
## 调整包

- [A-Bypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/&package=com.rpgfarm.a-bypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/">repo.co.kr</a>)
- [Liberty Lite (Beta)](cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/&package=com.ryleyangus.libertylite.beta) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/">ryleyangus.com/repo</a>)
- [Choicy](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/&package=com.opa334.choicy) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/">opa334.github.io</a>)
- Libhooker Configurator (可以在 Odyssey repo 中获取)
- [KernBypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/&package=jp.akusio.kernbypass-unofficial) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/">cydia.ichitaso.com</a>)
- [vnodebypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/&package=kr.xsf1re.vnodebypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/">repo.xsf1re.kr</a>)

::: tip

Choicy is available on the default BigBoss repo, however we recommend adding the developer's repo to ensure you have the most up-to-date version.

:::

There is other software available for hiding jailbreak, such as [Shadow](sileo://package/me.jjolano.shadow) (<a href="sileo://source/https://ios.jjolano.me/">ios.jjolano.me</a>), however we'll only be covering the above tweaks in this guide.

## Installation

1. Open your package manager app (e.g. Cydia, Sileo, Zebra)
1. Add the three repos linked above
1. Search for and install the three packages
1. Respring when prompted

## A-Bypass

::: tip

According to the tweak's author, A-Bypass works better on libhooker-based jailbreaks, such as <router-link to="/installing-chimera">Chimera</router-link>, <router-link to="installing-odyssey">Odyssey</router-link>, <router-link to="/installing-odysseyra1n">odysseyra1n</router-link>, and <router-link to="/installing-taurine">Taurine</router-link>. It still works on Substrate/Substitute-based jailbreaks, such as checkra1n and unc0ver, however.

:::

1. Open the Settings application
2. Scroll down to `A-Bypass`
3. Tap on `Check for Updates`
	- If a new app doesn't work with A-Bypass, you should always try to go back and try to check for updates in the A-Bypass preferences again.
4. Scroll down and enable any apps you wish to block jailbreak detection with.

## Liberty Lite

1. Open the Settings application
1. Scroll down to `Liberty Lite`
1. Enable `Enable Liberty`
1. Tap on `Block Jailbreak Detection`
1. Enable all the apps you want to block jailbreak detection with

## Choicy

::: tip

This is the best option for users wanting to use Snapchat on their jailbroken device.

:::

::: tip

If you use a libhooker-based jailbreak, such as <router-link to="/installing-chimera">Chimera</router-link>, <router-link to="installing-odyssey">Odyssey</router-link>, <router-link to="/installing-odysseyra1n">odysseyra1n</router-link>, or <router-link to="/installing-taurine">Taurine</router-link>, then [libhooker configurator](#libhooker-configurator) serves the same purpose as Choicy, while being natively integrated into libhooker.

:::

1. Open the Settings application
1. Scroll down to `Choicy`
1. Tap on `Applications`
1. Tap on an application that you selected with Liberty Lite
1. Enable `Custom Tweak Configuration`
	- For Snapchat, enable `Disable Tweak Injection` and skip the next steps
1. Make sure `Whitelist` is selected
1. Enable the bypass you're using - for Liberty Lite this would be `zzzzzLiberty`, or `!ABypass2` for A-Bypass.
1. Repeat this for every app you've selected to use with your bypass tweak.

## libhooker configurator

::: warning

This only works on libhooker-based jailbreaks! If you use a Substrate or Substitute based jailbreak, such as checkra1n or unc0ver, then this *will not work*, and you should use [Choicy](#choicy) instead!

:::

1. Open the `libhooker` application
1. Tap "Applications"
1. Scroll down to the application you wish to configure, and tap on it
1. Here, you can either disable tweaks entirely in this application, or configure individual tweaks.
   - To configure individual tweaks, enable "Override Configuration", which will open up options to only allow specific tweaks or deny specific tweaks.
   - For example, to allow only Liberty Lite, you'd select `Allow`, then select `zzzzzLiberty`.
   - If you're using A-Bypass, you'd enable `!ABypass2` instead.

## KernBypass (iOS 12.0 - 14.2)

::: tip

This is the best option for users wanting to use Nintendo apps (Mario Kart Tour, Animal Crossing: Pocket Camp, etc) and Pokemon GO on their jailbroken device.

:::

::: warning

KernBypass will not work on iOS 14 using unc0ver. Look into [vnodebypass](#vnodebypass) instead.

:::

::: danger

KernBypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.

:::

1. Open the Settings application
1. Scroll down to `KernBypass`
1. Tap `Enable KernBypass`
1. Enable all the apps you want to block jailbreak detection with

## vnodebypass

::: tip

vnodebypass is similar to KernBypass in regards to what it can bypass, but be aware that while it is active, you will lose access to your tweaks!

:::

::: danger

vnodebypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.

:::

1. If you are on iOS 14, ensure that `libkrw` 1.1.0 or later is installed. It is available in the default Elucubratus repository, if you are using unc0ver or checkra1n.
2. Open the `vnodebypass` app
3. Tap the `Enable` button
4. When done using the app with jailbreak detection, go back into the `vnodebypass` app and tap `Disable`
