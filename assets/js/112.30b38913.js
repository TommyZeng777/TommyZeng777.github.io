(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{468:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"p5710-【深基3-例2】数的性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p5710-【深基3-例2】数的性质"}},[t._v("#")]),t._v(" P5710 【深基3.例2】数的性质")]),t._v(" "),s("p",[s("strong",[t._v("题目描述")])]),t._v(" "),s("p",[t._v("一些数字可能拥有以下的性质：")]),t._v(" "),s("ul",[s("li",[t._v("性质 1：是偶数；")]),t._v(" "),s("li",[t._v("性质 2：大于 4 且不大于 12。")])]),t._v(" "),s("p",[t._v("小A 喜欢这两个性质同时成立的数字；Uim 喜欢这至少符合其中一种性质的数字；八尾勇喜欢刚好有符合其中一个性质的数字；正妹喜欢不符合这两个性质的数字。")]),t._v(" "),s("p",[s("strong",[t._v("输入格式")])]),t._v(" "),s("p",[t._v("输入一个数字 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("0")]),s("mo",[t._v("≤")]),s("mi",[t._v("x")]),s("mo",[t._v("≤")]),s("mn",[t._v("1000")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x(0\\le x \\le 1000)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("≤")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("≤")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1000")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("p",[s("strong",[t._v("输出格式")])]),t._v(" "),s("p",[t._v("输出这 4 个人是否喜欢这个数字，如果喜欢则输出"),s("code",[t._v("1")]),t._v("，否则输出"),s("code",[t._v("0")]),t._v("，用空格分隔。")]),t._v(" "),s("p",[s("strong",[t._v("输入输出样例")])]),t._v(" "),s("p",[s("strong",[t._v("输入 #1")]),t._v("复制")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("输出 #1")]),t._v("复制")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1 1 0 0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("解题思路:")])]),t._v(" "),s("p",[t._v('这个题明显是可以用一大堆if来判断的, 但其实可以运用"且或非"配合"位运算符",可以非常简单的实现功能')]),t._v(" "),s("p",[s("strong",[t._v("代码:")])]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<bits/stdcpp.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义布尔变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置a偶数得判定条件,最好是满足条件")]),t._v("\n\tb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置b条件得满足情况")]),t._v("\n\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里运用位运算符,记得要打括号不然容易报错,a&b就是 a和b都满足输出1,不满足输出2")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//附上运算法则")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[s("strong",[t._v("位运算符")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("符号")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("运算规则")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("&")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("按位与")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("两个位都为1时，结果才为1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("|")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("按位或")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("两个位都为0时，结果才为0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("^")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("按位异或")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("两个位相同为0，相异为1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("~")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("按位取反")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0变1，1变0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("<<")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("按位左移")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("各二进位全部左移若干位，高位丢弃，低位补0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(">>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("按位右移")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("各二进位全部右移若干位，对无符号数，高位补0，有符号数，"),s("br"),t._v("各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);