(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{474:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[t("strong",[s._v("目的: 建立本地文件和平台的连接通道")])])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("该教程区别于 2020 年及之前的教程主要是连接方式")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("ul",[t("li",[s._v("Github 2020 年 10 月开始就改了不能直接使用密钥部署， 密钥存在风险， 现在要用 ssh 服务部署 ( 生成 ssh 密钥 )")]),s._v(" "),t("li",[s._v("Github 仓库的默认分支 ( branch ) 改了， 和以前的结构不一样， master 分支变为 main")])])]),s._v(" "),t("p",[s._v("补充一个 gitee 的 SSH 生成连接教程，大家可以参考下，挺简单的")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/help/articles/4181#article-header0",target:"_blank",rel:"noopener noreferrer"}},[s._v("生成/添加 SSH 公钥 - Gitee.com"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"_1-使用-git-注册-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-git-注册-ssh"}},[s._v("#")]),s._v(" 1.使用 Git 注册 SSH")]),s._v(" "),t("p",[s._v("同样是使用 git bash 终端进行操作， ssh 工具是 git 自带的， 无需安装\n首先输入代码， 其含义是根据 github 邮箱生成 ssh 密匙")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx@xxxxx.com"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#冒号内填入邮箱地址  Github 用这个")]),s._v("\nssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx@xxxxx.com"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Gitee 平台用这个")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("重点：按 4 下 enter，记得没下间隔 1 秒左右")])]),s._v(" "),t("p",[s._v("生成地址如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("C: \\Users\\你的 windows 账户名、.ssh #注意是一个叫。ssh 的文件夹\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("内有几个文件， 记住一定是 "),t("code",[s._v(".pub")]),s._v(" 后缀的文件里的才是公钥， 使用记事本打开， 复制内部的代码")]),s._v(" "),t("p",[s._v("github 的密钥是 "),t("code",[s._v("id_rsa")]),s._v("\ngitee 是 "),t("code",[s._v("id_ed25519")]),s._v(" 文件")])]),s._v(" "),t("h4",{attrs:{id:"_2-打开-github-点击左上角进入设置界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开-github-点击左上角进入设置界面"}},[s._v("#")]),s._v(" 2. 打开 Github, 点击左上角进入设置界面")]),s._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gcore.jsdelivr.net/gh/TommyZeng777/picgo/img/202203250928681.png",alt:"image-20220320235616741"}}),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("点击进入 SSH 这个界面")])]),s._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://gcore.jsdelivr.net/gh/TommyZeng777/picgo/img/202203250928765.png",alt:"image-20220320235708988"}}),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("点击新建 SSH key\n建立新的 keys")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/TommyZeng777/picgo/img/202203250934323.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/TommyZeng777/picgo/img/202203250931885.png",alt:""}})]),s._v(" "),t("p",[s._v("输入无误点击下方 "),t("code",[s._v("Add SSH key")]),s._v(" 即可绑定密钥与本电脑")]),s._v(" "),t("h4",{attrs:{id:"_3-验证与-github-是否绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证与-github-是否绑定"}},[s._v("#")]),s._v(" 3. 验证与 github 是否绑定")]),s._v(" "),t("p",[s._v("输入代码并运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("随后输入 "),t("code",[s._v("yes")]),s._v(" 即可查询是否绑定成功")]),s._v(" "),t("p",[s._v("如果成功绑定， 最后会显示一串英文提示你成功")])])}),[],!1,null,null,null);t.default=r.exports}}]);