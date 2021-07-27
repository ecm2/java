(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1795:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、文字描述"}},[s._v("1、文字描述")])]),n("li",[n("a",{attrs:{href:"#_2、流程图描述"}},[s._v("2、流程图描述")])]),n("li",[n("a",{attrs:{href:"#_3、代码验证"}},[s._v("3、代码验证")])]),n("li",[n("a",{attrs:{href:"#_4、时效性"}},[s._v("4、时效性")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1为什么session要设置时限"}},[s._v("①为什么Session要设置时限")])]),n("li",[n("a",{attrs:{href:"#_2设置时限的难点"}},[s._v("②设置时限的难点")])]),n("li",[n("a",{attrs:{href:"#_3服务器端给session对象设置最大闲置时间"}},[s._v("③服务器端给Session对象设置最大闲置时间")])]),n("li",[n("a",{attrs:{href:"#_4代码验证"}},[s._v("④代码验证")])]),n("li",[n("a",{attrs:{href:"#_5强制session立即失效"}},[s._v("⑤强制Session立即失效")])])])])])]),n("p"),s._v(" "),n("h1",{attrs:{id:"第三节-session的工作机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三节-session的工作机制"}},[s._v("#")]),s._v(" 第三节 Session的工作机制")]),s._v(" "),n("h2",{attrs:{id:"_1、文字描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、文字描述"}},[s._v("#")]),s._v(" 1、文字描述")]),s._v(" "),n("p",[s._v("前提：浏览器正常访问服务器")]),s._v(" "),n("ul",[n("li",[s._v("服务器端没调用request.getSession()方法：什么都不会发生")]),s._v(" "),n("li",[s._v("服务器端调用了request.getSession()方法\n"),n("ul",[n("li",[s._v("服务器端检查当前请求中是否携带了JSESSIONID的Cookie\n"),n("ul",[n("li",[s._v("有：根据JSESSIONID在服务器端查找对应的HttpSession对象\n"),n("ul",[n("li",[s._v("能找到：将找到的HttpSession对象作为request.getSession()方法的返回值返回")]),s._v(" "),n("li",[s._v("找不到：服务器端新建一个HttpSession对象作为request.getSession()方法的返回值返回")])])]),s._v(" "),n("li",[s._v("无：服务器端新建一个HttpSession对象作为request.getSession()方法的返回值返回")])])])])])]),s._v(" "),n("h2",{attrs:{id:"_2、流程图描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、流程图描述"}},[s._v("#")]),s._v(" 2、流程图描述")]),s._v(" "),n("p",[n("img",{attrs:{src:a(715),alt:"./images"}})]),s._v(" "),n("h2",{attrs:{id:"_3、代码验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、代码验证"}},[s._v("#")]),s._v(" 3、代码验证")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.调用request对象的方法尝试获取HttpSession对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpSession")]),s._v(" session "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.调用HttpSession对象的isNew()方法")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" wetherNew "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNew")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3.打印HttpSession对象是否为新对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wetherNew = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wetherNew"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HttpSession对象是新的"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HttpSession对象是旧的"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4.调用HttpSession对象的getId()方法")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 5.打印JSESSIONID的值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JSESSIONID = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_4、时效性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、时效性"}},[s._v("#")]),s._v(" 4、时效性")]),s._v(" "),n("h3",{attrs:{id:"_1为什么session要设置时限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1为什么session要设置时限"}},[s._v("#")]),s._v(" ①为什么Session要设置时限")]),s._v(" "),n("p",[s._v("用户量很大之后，Session对象相应的也要创建很多。如果一味创建不释放，那么服务器端的内存迟早要被耗尽。")]),s._v(" "),n("h3",{attrs:{id:"_2设置时限的难点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2设置时限的难点"}},[s._v("#")]),s._v(" ②设置时限的难点")]),s._v(" "),n("p",[s._v("从服务器端的角度，很难精确得知类似浏览器关闭的动作。而且即使浏览器一直没有关闭，也不代表用户仍然在使用。")]),s._v(" "),n("h3",{attrs:{id:"_3服务器端给session对象设置最大闲置时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3服务器端给session对象设置最大闲置时间"}},[s._v("#")]),s._v(" ③服务器端给Session对象设置最大闲置时间")]),s._v(" "),n("ul",[n("li",[s._v("默认值：1800秒")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(716),alt:"./images"}})]),s._v(" "),n("p",[s._v("最大闲置时间生效的机制如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(717),alt:"./images"}})]),s._v(" "),n("h3",{attrs:{id:"_4代码验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4代码验证"}},[s._v("#")]),s._v(" ④代码验证")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ※测试时效性")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取默认的最大闲置时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maxInactiveIntervalSecond "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMaxInactiveInterval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"maxInactiveIntervalSecond = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" maxInactiveIntervalSecond"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置默认的最大闲置时间")]),s._v("\nsession"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxInactiveInterval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_5强制session立即失效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5强制session立即失效"}},[s._v("#")]),s._v(" ⑤强制Session立即失效")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("invalidate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("RouterLink",{attrs:{to:"/pro001-fengJie/pro001-javaweb/lecture/chapter09/verse02.html"}},[s._v("上一节")]),s._v(" "),n("RouterLink",{attrs:{to:"/pro001-fengJie/pro001-javaweb/lecture/chapter09/index.html"}},[s._v("回目录")])],1)])}),[],!1,null,null,null);t.default=e.exports},715:function(s,t,a){s.exports=a.p+"assets/img/img011.8d401b8c.png"},716:function(s,t,a){s.exports=a.p+"assets/img/img012.e7ac6aa7.png"},717:function(s,t,a){s.exports=a.p+"assets/img/img013.d507d397.png"}}]);