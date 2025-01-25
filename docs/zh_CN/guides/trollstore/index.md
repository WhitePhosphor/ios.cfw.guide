---
lang: zh_CN
title: 安装 TrollStore
description: TrollStore 安装指南
permalink: /installing-trollstore
sidebar: false
home: true
hero: false
redirect_from:
  - /trollstore
extra_contributors:
  - alfiecg24
  - opa334
  - iCraze
---

# 安装 TrollStore

::: tip

你可以在 r/Jailbreak 的[Discord 服务器](https://discord.gg/jb) 上获取**英语**帮助。

:::

::: danger

TrollStore **不是**越狱。

:::

TrollStore 是一个相当实用的工具。它能利用 CoreTrust 漏洞永久签名并安装几乎任何具有几乎任何权限的应用程序。TrollStore 的最新版本（尤其是 2.0 及更高版本）在某些代码签名未被正确验证的情况下通过 CoreTrust 漏洞工作。

安装 TrollStore 的过程因设备和 iOS 版本的不同而有所不同。以下是这些不同组合对应的安装指南。

::: danger

如果你的设备正在运行 iOS 14.0 *beta 1* 或者更早版本，或者正在运行 iOS 16.7.x (不包括 16.7 RC (20H18))，又或者是正在运行 iOS 17.0.1 或者更新的版本，这些设备将 **永远** 不会支持 TrollStore。

:::

---

<table>
  <colgroup>
    <col span="1" style="width: 13%;">
    <col span="1" style="width: 13%;">
    <col span="1" style="width: 23%;">
    <col span="1" style="width: 23%;">
    <col span="1" style="width: 28%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center; font-weight: bold;">从</th>
      <th style="text-align: center; font-weight: bold;">到</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A8)</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A9-A11)</th>
      <th style="text-align: center; font-weight: bold;">arm64e (A12-A17/M1-M2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">14.0 beta 1 或更早</td>
      <td style="text-align: center;" colspan="3">不支持</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">14.0 beta 2</td>
      <td style="text-align: center; font-weight: bold;">14.8.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.0</td>
      <td style="text-align: center; font-weight: bold;">15.5 beta 4</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 1</td>
      <td style="text-align: center; font-weight: bold;">15.6 beta 3</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 4</td>
      <td style="text-align: center; font-weight: bold;">15.6.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7</td>
      <td style="text-align: center; font-weight: bold;">15.7.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7.2</td>
      <td style="text-align: center; font-weight: bold;">15.8.3</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollmisaka">TrollMisaka</router-link></td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0 beta 1</td>
      <td style="text-align: center; font-weight: bold;">16.0 beta 3</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0 beta 4</td>
      <td style="text-align: center; font-weight: bold;">16.6.1</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollrestore">TrollRestore</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7</td>
      <td style="text-align: center; font-weight: bold;">16.7.10</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;" colspan="2">不支持</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0 beta 1</td>
      <td style="text-align: center; font-weight: bold;">17.0 beta 4</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center; font-weight: bold;"><router-link to="/installing-trollstore-trollrestore">TrollRestore</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0 beta 5</td>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollrestore">TrollRestore</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">17.0.1 and later</td>
      <td style="text-align: center;">不适用</td>
      <td style="text-align: center;" colspan="2">不支持</td>
    </tr>
  </tbody>
</table>
