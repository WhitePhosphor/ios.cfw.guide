module.exports = {
  deviceChart: {
    deviceSelection: {
      pageTitle: "设备选择 (${deviceType})",
      description: "查找哪种越狱方法适用于你的设备 ${deviceType}",
      requiredReading: {
        title: "必读内容",
        content: [
          "不同的 ${deviceType} 需要不同的步骤来越狱您的 ${osStr} 设备。本页面将帮助你开始越狱的步骤。",
          "请在下方选择您的 ${deviceType} 型号。"
        ]
      },
      iPhoneNotice: "注意，iPhone \"Plus\", \"Max\" 和 \"mini\" 在功能上与常规型号相同。",
      info: {
        soc: "SoC: ${soc}",
        arch: "架构: ${arch}",
        latestFw: "最新版本: ${latestFw}",
        latestJailbreakFirmware: "最新可越狱版本: ${latestJailbreakFirmware}",
        released: "发布于 ${released}",
        showMore: "显示更多",
        noJailbreaks: "没有可用的越狱。"
      },
      dateStyles: { // Don't translate this bit, just ask me (emiyl) to handle it
        yearOnly: { year: 'numeric'},
        yearAndMonth: { dateStyle: 'medium'},
        yearMonthAndDay: { dateStyle: 'medium'}
      }
    },
    getStarted: {
      pageTitle: "开始",
      description: "查找你可以在你的 iOS 或 tvOS 设备上使用的越狱",
      requiredReading: {
        title: "必读内容",
        content: [
          "不同的设备需要不同的步骤来越狱你的 iOS 或 tvOS 设备。本页面将帮助你开始越狱的步骤。",
          "请在下方选择您的设备型号。"
        ]
      }
    },
    firmwareSelection: {
      pageTitle: "固件选择 (${device})",
      description: "查找你可以在你的 ${device} 上使用的越狱。",
      requiredReading: {
        title: "必读内容",
        content: [
          "不同的固件版本需要不同的步骤来越狱你的 ${osStr} 设备。本页面将帮助你开始越狱的步骤。",
          "从下表中选择适合你版本的页面。请注意，“从”和“到”所标志的版本都是包含在这个区间之内的。例如，“从 ${minFw0} 到 ${maxFw0}”行包括版本 ${minFw1}、版本 ${maxFw1} 及其间的所有版本。",
          "你的设备版本可以在设置应用程序中的 `通用` -> `关于本机` 中找到。",
        ],
      },
      findiOSVersion: {
        title: "查找你的 ${osStr} 版本",
        verStr: {
          old: "版本",
          new: "软件版本",
          tvOld: "Apple TV 软件",
          tvNew: "tvOS" //I think I set this up right? it changes depending on whether you're on TV Software or tvOS.
        },
        instructions: {
          ios: "1. 打开设置应用程序\n1. 导航到 `通用` -> `关于本机` -> `${verStr}`",
          tv: "1. 打开设置应用程序\n1. 导航到 `通用` -> `关于本机` -> `${verStr}`",
        },
        image: { // For translating, you can take an identical screenshot of these images in the language that you're translating to
          altText: "在 ${deviceType} 上查找你的 ${osStr} 版本",
          iphone: "/assets/images/find-version.jpg",
          ipad: "/assets/images/find-version-ipad.jpg",
          iphoneOld: "/assets/images/find-version-old.jpg",
          ipadOld: "/assets/images/find-version-ipad-old.jpg",
          tvOld: "/assets/images/find-version-tv-old.jpg",
          tvNew: "/assets/images/find-version-tv-new.jpg" 
        },
      }
    },
    table: {
      title: "版本表",
      tableHeader: [
        "从",
        "到",
        "越狱",
      ],
      showBetaVersions: "显示测试版本",
      hideBetaVersions: "隐藏测试版本",
      noJbTip: "标记为“不可用”的地方也就意味着该版本没有越狱。",
      showMore: "显示更多"
    },
  },
}
