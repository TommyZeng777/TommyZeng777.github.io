---
home: true  # 协商true就可以基于这个生成首页
reading-progress: false
# heroImage: /img/Logov17.png
# heroText: 斯基小支部
tagline: 任重而道远，积跬步而行
# actionText: 立刻进入 →
# actionLink: /web/
bannerBg: "https://testingcf.jsdelivr.net/gh/TommyZeng777/picgo/img/202209200031954.jpg"
# 默认: auto
# 可选参数
# auto: 自动背景, 为网格纹
# none: 无背景
# <大图地址>: 本地的: /img/bg.jpeg 网络地址:<https...>
# background: <自定义背景样式>，如background: blue
# 提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
readingShow: false # 隐藏阅读进度条用的

# 这个是首页的三个分类图标的快捷方式
# features: # 可选的
#   - title: HEXO
#     details: JavaScript、ES6、Vue框架等前端技术
#     link: /web/ # 可选
#     imgUrl: /img/web.png # 可选
#   - title: 页面
#     details: html(5)/css(3)，前端页面相关技术
#     link: /ui/
#     imgUrl: /img/ui.png
#   - title: 技术
#     details: 技术文档、教程、技巧、总结等文章
#     link: /technology/
#     imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
pageClass: vdoing-index-class
---

<!-- ::: cardList 1   
```yaml
- name: 麋鹿鲁哟
  desc: 大道至简，知易行难
  avatar: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg # 可选
  link: https://www.cnblogs.com/miluluyo/ # 可选
  bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#6854A1' # 可选，默认var(--textColor)
- name: XAOXUU
  desc: '#IOS #Volantis主题作者'
  avatar: https://testingcf.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png
  link: https://xaoxuu.com
  bgColor: '#718971'
  textColor: '#fff'
- name: 平凡的你我
  desc: 理想成为大牛的小陈同学
  avatar: https://reinness.com/avatar.png
  link: https://reinness.com
  bgColor: '#FCDBA0'
  textColor: '#A05F2C'
```
:::

::: cardImgList
```yaml
- img: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200529162253.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 # 描述，可选
  author: Evan Xu # 作者，可选
  avatar: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg # 头像，可选
- img: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200530100256.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: Evan Xu
  avatar: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg
- img: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200530100257.jpg
  link: https://xugaoyi.com/
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: Evan Xu
  avatar: https://testingcf.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg
```
::: -->

<!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->

<ClientOnly>
  <IndexBigImg />
</ClientOnly>