module.exports = {
  search: '搜索',
  
  locales: {
    lang: 'zh_CN',
    title: 'iOS 指南',
    description: '一份完整的 iOS 越狱指南，从原生 iOS 到越狱 iOS。',
  },
  
  themeConfig: {
  	selectLanguageName: "简体中文",
  	backToHome: "回到主界面",
  	contributorsText: "贡献者",
  	editLinkText: "编辑此页",
  	lastUpdatedText: "最后更新",
  	openInNewWindow: "在新窗口中打开",
  	selectLanguageAriaLabel: "选择语言",
  	toggleDarkMode: "切换深色模式",
  	toggleSidebar: "切换侧边栏",
    
    discordNoticeText: "如果需要英语帮助，可以到 r/Jailbreak [Discord Server](https://discord.gg/jb) 上进行询问。",
    repoLabel: '<i class="fab fa-github"></i>',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
    chart: require('./chart'),
  }
};