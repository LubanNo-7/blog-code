module.exports = {
  title: "求知，求识",
  description: '人生如戏，戏如人生 .',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    docsRepo: 'https://github.com/LubanNo-7/blog.github.io.git',  
    docsBranch: 'main',
    docsDir: '',
    lastUpdatedText: '上次更新时间',
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'LubanNo-7/blog.github.io',
    // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接。
    // repoLabel: '查看源码',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑',
    displayAllHeaders: true, // 默认值：false
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容 
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '工具推荐',
        icon: 'reco-message',
        items: [
          { text: 'codeSandbox', link: 'https://codesandbox.io',icon: 'reco-coding' },
          { text: '正则表达式手册', link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html', icon: 'reco-coding' }
        ]
      },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '面试文档', 
        icon: 'reco-blog',
        items: [
          { text: 'Java基础知识', link: '/docs/theme-reco/javabase/' },
          { text: 'Spring源码剖析', link: '/docs/theme-reco/spring/' },
        ]
      }
    ],
    // sidebar: {
    //   '/docs/theme-reco/javabase/': [
    //     '',     /* /foo/ */
    //     'hashmap',  /* /foo/one.html */
    //     'map'   /* /foo/two.html */
    //   ],

    //   '/docs/theme-reco/spring/': [
    //     '',      /* /bar/ */
    //     'api', /* /bar/three.html */
    //     'plugin'   /* /bar/four.html */
    //   ],
      
    // },  
    sidebar: [
      '',
      {
        title: 'Java基础',
        collapsable: true,
        children: [
          '/docs/theme-reco/javabase/hashmap',
          ['/docs/theme-reco/javabase/map', 'HashMap介绍']
        ],
      },
      {
        title: 'Spring',
        collapsable: true,
        children: [
          '/docs/theme-reco/spring/Spring AOP',
          '/docs/theme-reco/spring/Spring IOC'
        ]
      }
    ],

    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: 'xuanwu',
    // 作者头像
    authorAvatar: '/avatar.png',
    // ICP备案号
    record: '蜀ICP备2021032335号-1',
    // ICP 备案指向链接
    recordLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间
    startYear: '2023'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
