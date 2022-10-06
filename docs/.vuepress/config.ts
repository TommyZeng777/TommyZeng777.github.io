/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */


 import { resolve } from 'path'
 import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
 import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
 import dayjs from 'dayjs'
 import baiduCode from './config/baiduCode' // 百度统计hm码
 import htmlModules from './config/htmlModules' // 自定义插入的html块
 
 
 export default defineConfig4CustomTheme<VdoingThemeConfig>({
  //  theme: 'vdoing', // 使用npm主题包
   theme: resolve('vuepress-theme-vdoing'), // 使用本地主题包
   // 这个就是官方提到的locales，看来是用来填写相关信息的
   locales: {
     '/': {
       lang: 'zh-CN',
       title: "Tommy's Blog",
       description: '各种内容都有，甚至有英语学习',
     }
   },
   // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
 
 
   // 主题配置
   themeConfig: {
     // 首页配置，自定义VUE插件
     indexImg: {
      // navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      // switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      // bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
      // descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
      // desc: ["Web前端技术博客，积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu", "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt", "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
      // descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      // descFadeInTime: 100,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      // descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
      // descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      // bubble: true,    // 是否开启图片的气泡效果，默认为 false
      // bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      // bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },
     
     // 导航栏配置
     nav: [
       // 这里的数据结构是：text是对象文本信息，link是相对路径
       //每一个"{}"括号内的信息都是一个模块，指向一个生成的文件
       // { text: '导航', link: '/navigation/'},
       { text: '🎈首页', link: '/',  },  
       
 
       {
         text: '📐分类',
         link: '/categories/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
         items: [
          { text: '01-考研人', link: '/pages/82ac8b/' },
          { text: '02-英语学习', link: '/pages/77350f/' },
          { text: '09-静态博客知识分享', link: '/pages/9d57fc/'},
        ]
         // items项目可以实现鼠标悬停时显示二级导航菜单，此处items是一个数组，每一项是一个对象
         // 对象的属性有text和link，items可以套娃两层，以实现二级菜单中的分级
        //  items: [
           // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
           // {
           //   text: '前端文章',
           //   items: [
           //     { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
           //   ],
           // },
           // {
           //   text: '学习笔记',
           //   items: [
           //     { text: '《JavaScript教程》', link: '/note/javascript/' },
           //     { text: '《JavaScript高级程序设计》', link: '/note/js/' },
           //     { text: '《ES6 教程》', link: '/note/es6/' },
           //     { text: '《Vue》', link: '/note/vue/' },
           //     { text: '《React》', link: '/note/react/' },
           //     {
           //       text: '《TypeScript 从零实现 axios》',
           //       link: '/note/typescript-axios/',
           //     },
           //     {
           //       text: '《Git》',
           //       link: '/note/git/',
           //     },
           //     {
           //       text: 'TypeScript',
           //       link: '/pages/51afd6/',
           //     },
           //     {
           //       text: 'JS设计模式总结',
           //       link: '/pages/4643cd/',
           //     },
           //   ],
           // },
        //  ],
       },
 
       { text: '📌标签', link: '/tags/' },
       { text: '🕒时光机', link: '/archives/' },
       
       
       // {
       //   text: '页面',
       //   link: '/ui/',
       //   items: [
       //     { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
       //     { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
       //   ],
       // },
       // {
       //   text: '技术',
       //   link: '/technology/',
       //   items: [
       //     { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
       //     { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
       //     { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
       //     { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
       //   ],
       // },
 
       // {
       //   text: '更多',
       //   link: '/more/',
       //   items: [
       //     { text: '学习', link: '/pages/f2a556/' },
       //     { text: '面试', link: '/pages/aea6571b7a8bae86/' },
       //     { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
       //     { text: '实用技巧', link: '/pages/baaa02/' },
       //     { text: '友情链接', link: '/friends/' },
       //   ],
       // },
 
       {
         text: '✏️关于',
         link: '/pages/9d57fc/',
         items: [
           { text: '我的', link: '/pages/1b697e/' },
           { text: '网站', link: '/pages/f97811/'},
         ]
       },
 
 
       // {
       //   text: '收藏',
       //   link: '/pages/beb6c0bd8a66cea6/',
       //   // items: [
       //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
       //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
       //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
       //   // ],
       // },
 
       // {
       //   text: '索引',
       //   link: '/archives/',
       //   items: [
       //     { text: '分类', link: '/categories/' },
       //     { text: '标签', link: '/tags/' },
       //     { text: '归档', link: '/archives/' },
       //   ],
       // },
 
       {
         text: '📘正经人',
         link: '/diary/',
       }
     ],
 
     // 侧边栏配置
     sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
     logo: '/img/无底logo.svg', // 导航栏logo
     repo: 'TommyZeng777/TommyZeng777.github.io', // 导航栏右侧生成Github链接
     searchMaxSuggestions: 10, // 搜索结果显示最大数
     lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
     docsDir: 'docs', // 编辑的文件夹
     editLinks: true, // 启用编辑
     editLinkText: '编辑',
 
     //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//
     //分类页的数据信息在docs/@pages文件夹里，信息是在front matter里标注的，示例如下
     // ---
     // categoriesPage: true
     // title: 分类
     // permalink: /categories/
     // article: false
     // ---
     category: true, // 是否打开分类功能，默认true
     tag: true, // 是否打开标签功能，默认true
     archive: true, // 是否打开归档功能，默认true
     categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
 
     // 背景图片,优先级高于index.md里的,所以设置了会直接显示这里的背景图片,不过这里的背景是整个网页的背景
     // bodyBgImg: [
     //   'https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021825519.jpg',
     //   'https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204051631118.jpg',
     //   'https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202204021047472.jpg'
     // ],
     // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
     // 这里 "[]" 是数组array的意思
 
     bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
     // titleBadge: false, // 文章标题前的图标是否显示，默认true
     // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
     //   '图标地址1',
     //   '图标地址2'
     // ],
     // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
 
 
     
     updateBar: { // 最近更新栏
       showToArticle: true, // 显示到文章页底部，默认true
       moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
     },
     rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
     
     //sidebarOpen是左侧的侧边栏
     sidebarOpen: true, // 初始状态是否打开左侧边栏，默认true
     pageButton: false, // 是否显示快捷翻页按钮，默认true
 
 
 
     // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    
     // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring', 将无法使用目录页
     sidebar: 'structuring',
 
 
     
 
     // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
     author: {
       name: 'TommyZeng', // 必需
       link: 'https://github.com/TommyZeng777', // 可选的
     },
 
     // 博主信息 (显示在首页侧边栏)
     blogger: {
       avatar: 'https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202207142320198.jpg',
       name: 'Tommy',
       slogan: '努力学习，缩小差距',
     },
 
     // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
     social: {
       iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
       icons: [
         {
           iconClass: 'icon-youjian',
           title: '发邮件',
           link: 'mailto:tommyzeng777@gmail.com',
         },
         {
           iconClass: 'icon-github',
           title: 'GitHub',
           link: 'https://github.com/tommyzeng777',
         },
         {
           iconClass: 'icon-bilibili',
           title: 'Bilibili',
           link: 'https://space.bilibili.com/432754341',
         },
       ],
     },
 
     // 这里竟然会导致手机端的bug，非常奇葩
     // 页脚信息
     footer: {
      createYear: 2021, // 博客创建年份
      copyrightInfo:
         '| 备案信息:10086号', // 博客版权信息，支持a标签或换行标签
    },
 
     // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
     extendFrontmatter: {
       author: {
         name: 'TommyZeng',
         link: 'https://github.com/tommyzeng777'
       }
     },
 
     // 自定义hmtl(广告)模块, 默认是主页里的微信公众号
     // htmlModules
   },
 
   // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
   head: [
     ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],
     ['link', { rel: 'icon', href: '/img/Logov17.png' }], //favicons，资源放在public文件夹
     [
       'meta',
       {
         name: 'keywords',
         content: 'Javascript,CSS,HTML5,Markdown,C++',
       },
     ],
     ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
     ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
     // [
     //   'script',
     //   {
     //     'data-ad-client': 'ca-pub-7828333725993554',
     //     async: 'async',
     //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
     //   },
     // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
   ],
 
 
   // 插件配置
   plugins: <UserPlugins>[
 
     'vuepress-plugin-baidu-autopush', // 百度自动推送
 
     [
       'vuepress-plugin-baidu-tongji', // 百度统计
       {
         hm: baiduCode,
       },
     ],
 
     // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
     'fulltext-search',
 
     // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
     // 'thirdparty-search': {
     //   thirdparty: [
     //     {
     //       title: '在MDN中搜索',
     //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
     //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
     //     },
     //     {
     //       title: '在Runoob中搜索',
     //       frontUrl: 'https://www.runoob.com/?s=',
     //     },
     //     {
     //       title: '在Vue API中搜索',
     //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
     //     },
     //     {
     //       title: '在Bing中搜索',
     //       frontUrl: 'https://cn.bing.com/search?q=',
     //     },
     //     {
     //       title: '通过百度搜索本站的',
     //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
     //     },
     //   ],
     // },
 
     [
       'one-click-copy', // 代码块复制按钮
       {
         copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
         copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
         duration: 1000, // prompt message display time.
         showInMobile: false, // whether to display on the mobile side, default: false.
       },
     ],
 
     [
       'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
       {
         settings: {
           // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
           // cssLib: ['http://xxx'], // 在线示例中的css依赖
           // vue: 'https://testingcf.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
           jsfiddle: false, // 是否显示 jsfiddle 链接
           codepen: true, // 是否显示 codepen 链接
           horizontal: false, // 是否展示为横向样式
         },
       },
     ],
     [
       'vuepress-plugin-zooming', // 放大图片
       {
         selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
         options: {
           bgColor: 'rgba(0,0,0,0.6)',
         },
       },
     ],
     [
       'vuepress-plugin-comment', // 评论
       {
         choosen: 'gitalk',
         options: {
           clientID: '90e4993bfa3f7676c27f',
           clientSecret: '20eb4f12bc32ad40f0c53ac7550610daca97c4f6',
           repo: 'Blog-Comment', // GitHub 仓库
           owner: 'TommyZeng777', // GitHub仓库所有者
           admin: ['TommyZeng777'], // 对仓库有写权限的人
           // distractionFreeMode: true,
           pagerDirection: 'last', // 'first'正序 | 'last'倒序
           id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
           title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
           labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
           body:
             '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
         },
       },
     ],
     [
       '@vuepress/last-updated', // "上次更新"时间格式
       {
         transformer: (timestamp, lang) => {
           return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
         },
       },
     ],
 
 
     // [
     //   '@renovamen/vuepress-plugin-mermaid'
     // ],
 
     // 回溯上次阅读进度
     [
       {
           name: 'custom-plugins',
           globalUIComponents: ["LastReadingPopup"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
       },
     ],
 
     [
       "md-enhance",
       {
        //  enableAll: true,
         mermaid: true,
         // 配置选项
       },
     ],
 
     // Mac样式代码块和可折叠代码框
     [
       {
           name: 'custom-plugins',
           globalUIComponents: ["BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
       },
     ],
 
     // [
     //   'vuepress-plugin-md-enhance', {
     //   enableAll: true,
     //   // mark: true, //=标记=
     //   // tasklist: true,
     //   // mdImport: true,
     //   // chart: true,
     //   // flowchart: true,
     //   // mermaid: true,// 启用 mermaid
     // },
     // ]
     
     'reading-progress',//阅读进度展现
    //  'tabs',//tabs多栏插件
     
    //  'element-ui',// 多栏插件
     
 
 
   ],
 
   markdown: {
     lineNumbers: true,
     extractHeaders: ['h2', 'h3'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
   },
 
   // 监听文件变化并重新构建
   extraWatchFiles: [
     '.vuepress/config.ts',
     '.vuepress/config/htmlModules.ts',
   ]
 })
 