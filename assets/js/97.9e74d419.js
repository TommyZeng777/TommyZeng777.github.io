(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{452:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"插件研究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件研究"}},[s._v("#")]),s._v(" 插件研究")]),s._v(" "),a("p",[s._v("Vuepress 的插件非常多， 最简单的办法是直接去 Npm 官网搜索 "),a("code",[s._v("Vuepress-plugin")]),s._v(" 即可搜索到专用插件，带有 "),a("code",[s._v("Vuepress")]),s._v(" 前缀的插件都是可以拆封即用的")]),s._v(" "),a("p",[s._v("只需在输入相应代码如 npm 官网右上角的安装代码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @renovamen/vuepress-plugin-mermaid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("随后在 "),a("code",[s._v("config.js/config.ts")]),s._v(" 文件中的 "),a("code",[s._v("plugins")]),s._v(" 部分添加以下代码")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .....")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .....")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只需要加入这部分即可，上面是原文档中有的，ts 和 js 在引入插件的方式上都是一样的")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@renovamen/vuepress-plugin-mermaid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"vdoing-插件推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vdoing-插件推荐"}},[s._v("#")]),s._v(" Vdoing 插件推荐")]),s._v(" "),a("p",[s._v("经过测试，不知是不是因为 "),a("code",[s._v("vdoing")]),s._v(" 采用的 vuepress 版本比较老，所以有好几个插件不兼容")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("目前兼容的插件如下:")])]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/@renovamen/vuepress-plugin-mermaid",target:"_blank",rel:"noopener noreferrer"}},[s._v("mermaid 思维导图插件"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm 安装代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @renovamen/vuepress-plugin-mermaid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置方法如上文")]),s._v(" "),a("p",[s._v("使用方法:")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("    ```mermaidjs        //这个插件必须要在 mermaid 后加 js 才可以渲染\n    sequenceDiagram\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Alice->John")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hello John"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" how are you"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("\n    loop Every minute\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("John--\x3eAlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Great"),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!")]),s._v("\n    end\n    ```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"不兼容的插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不兼容的插件"}},[s._v("#")]),s._v(" 不兼容的插件")]),s._v(" "),a("p",[s._v("不兼容特指 "),a("code",[s._v("Vdoing")]),s._v(" 主题，原因主要是因为版本问题, 因为有部分新插件是直接适配的 "),a("code",[s._v("Vuepress 2.0")]),s._v(" 版本")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-mermaidjs",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress Plugin for mermaid.js"),a("OutboundLink")],1),s._v("\n这个因为更新是在最近一个月更新的，所以是用不了大概率是不适配1.0版本的网页了")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-md-enhance",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-md-enhance V2版本"),a("OutboundLink")],1),s._v("\n这个插件的V1版本是可用的，npm代码区别是")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# V2版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" vuepress-plugin-md-enhance@next\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# V1版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" vuepress-plugin-md-enhance\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"插件收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件收集"}},[s._v("#")]),s._v(" 插件收集")]),s._v(" "),a("h3",{attrs:{id:"v1-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-vue"}},[s._v("#")]),s._v(" V1 Vue")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-tabs",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-tabs"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);