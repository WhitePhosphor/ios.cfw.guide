const getStarted = {
  text: 'iOS 指南',
  children: [
    '/zh_CN/get-started/',
  ],
}

const guides = {
  text: '指南',
  children: [
    '/zh_CN/installing-trollstore/',
    '/zh_CN/sideloading-apps/',
    '/zh_CN/blocking-jailbreak-detection/',
    '/zh_CN/updating-blobless/',
  ],
}

const pkgman = {
  text: '软件包管理器',
  children: [
    {
      text: '解释一则',
      link: '/zh_CN/package-managers/'
    },
    '/zh_CN/using-sileo/',
    '/zh_CN/using-cydia/',
    '/zh_CN/recommended-repos/',
  ],
}

const jailbreaking = {
  text: '越狱',
  children: [
    '/zh_CN/installing-palera1n/',
    '/zh_CN/installing-dopamine/',
    '/zh_CN/installing-chimera/',
  ],
}

const troubleshooting = {
  text: '故障排除',
  children: [
    '/zh_CN/troubleshooting/',
    '/zh_CN/faq/',
    '/zh_CN/types-of-jailbreak/',
    {
      text: 'Discord',
      link: 'https://discord.gg/jb'
    },
  ],
}

module.exports = {
  '/zh_CN/': [
    getStarted,
    jailbreaking,
    pkgman,
    guides,
    troubleshooting,
  ],
}