(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1955:function(t,a,_){"use strict";_.r(a);var r=_(44),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1、aop概念介绍"}},[t._v("1、AOP概念介绍")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1名词解释"}},[t._v("①名词解释")])]),r("li",[r("a",{attrs:{href:"#_2aop的作用"}},[t._v("②AOP的作用")])])])]),r("li",[r("a",{attrs:{href:"#_2、横切关注点"}},[t._v("2、横切关注点")])]),r("li",[r("a",{attrs:{href:"#_3、通知-记住"}},[t._v("3、通知[记住]")])]),r("li",[r("a",{attrs:{href:"#_4、切面-记住"}},[t._v("4、切面[记住]")])]),r("li",[r("a",{attrs:{href:"#_5、目标"}},[t._v("5、目标")])]),r("li",[r("a",{attrs:{href:"#_6、代理"}},[t._v("6、代理")])]),r("li",[r("a",{attrs:{href:"#_7、连接点"}},[t._v("7、连接点")])]),r("li",[r("a",{attrs:{href:"#_8、切入点-记住"}},[t._v("8、切入点[记住]")])])])]),r("p"),t._v(" "),r("h1",{attrs:{id:"第四节-aop术语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第四节-aop术语"}},[t._v("#")]),t._v(" 第四节 AOP术语")]),t._v(" "),r("h2",{attrs:{id:"_1、aop概念介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、aop概念介绍"}},[t._v("#")]),t._v(" 1、AOP概念介绍")]),t._v(" "),r("h3",{attrs:{id:"_1名词解释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1名词解释"}},[t._v("#")]),t._v(" ①名词解释")]),t._v(" "),r("p",[t._v("AOP："),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("A")]),t._v("spect "),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("O")]),t._v("riented "),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("P")]),t._v("rogramming面向切面编程")]),t._v(" "),r("h3",{attrs:{id:"_2aop的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2aop的作用"}},[t._v("#")]),t._v(" ②AOP的作用")]),t._v(" "),r("p",[t._v("下面两点是同一件事的两面，一枚硬币的两面：")]),t._v(" "),r("ul",[r("li",[t._v("简化代码：把方法中固定位置的重复的代码"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("抽取")]),t._v("出来，让被抽取的方法更专注于自己的核心功能，提高内聚性。")]),t._v(" "),r("li",[t._v("代码增强：把特定的功能封装到切面类中，看哪里有需要，就往上套，被"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("套用")]),t._v("了切面逻辑的方法就被切面给增强了。")])]),t._v(" "),r("h2",{attrs:{id:"_2、横切关注点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、横切关注点"}},[t._v("#")]),t._v(" 2、横切关注点")]),t._v(" "),r("p",[t._v("从每个方法中抽取出来的同一类非核心业务。在同一个项目中，我们可以使用多个横切关注点对相关方法进行多个不同方面的增强。")]),t._v(" "),r("p",[t._v("这个概念不是语法层面天然存在的，而是根据附加功能的逻辑上的需要：有十个附加功能，就有十个横切关注点。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(941),alt:"./images"}})]),t._v(" "),r("h2",{attrs:{id:"_3、通知-记住"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、通知-记住"}},[t._v("#")]),t._v(" 3、通知[记住]")]),t._v(" "),r("p",[t._v("每一个横切关注点上要做的事情都需要写一个方法来实现，这样的方法就叫通知方法。")]),t._v(" "),r("ul",[r("li",[t._v("前置通知：在被代理的目标方法"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("前")]),t._v("执行")]),t._v(" "),r("li",[t._v("返回通知：在被代理的目标方法"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("成功结束")]),t._v("后执行（"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("寿终正寝")]),t._v("）")]),t._v(" "),r("li",[t._v("异常通知：在被代理的目标方法"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("异常结束")]),t._v("后执行（"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("死于非命")]),t._v("）")]),t._v(" "),r("li",[t._v("后置通知：在被代理的目标方法"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("最终结束")]),t._v("后执行（"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("盖棺定论")]),t._v("）")]),t._v(" "),r("li",[t._v("环绕通知：使用try...catch...finally结构围绕"),r("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("整个")]),t._v("被代理的目标方法，包括上面四种通知对应的所有位置")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(942),alt:"./images"}})]),t._v(" "),r("h2",{attrs:{id:"_4、切面-记住"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、切面-记住"}},[t._v("#")]),t._v(" 4、切面[记住]")]),t._v(" "),r("p",[t._v("封装通知方法的类。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(943),alt:"./images"}})]),t._v(" "),r("h2",{attrs:{id:"_5、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、目标"}},[t._v("#")]),t._v(" 5、目标")]),t._v(" "),r("p",[t._v("被代理的目标对象。")]),t._v(" "),r("h2",{attrs:{id:"_6、代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、代理"}},[t._v("#")]),t._v(" 6、代理")]),t._v(" "),r("p",[t._v("向目标对象应用通知之后创建的代理对象。")]),t._v(" "),r("h2",{attrs:{id:"_7、连接点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、连接点"}},[t._v("#")]),t._v(" 7、连接点")]),t._v(" "),r("p",[t._v("这也是一个纯逻辑概念，不是语法定义的。")]),t._v(" "),r("p",[t._v("把方法排成一排，每一个横切位置看成x轴方向，把方法从上到下执行的顺序看成y轴，x轴和y轴的交叉点就是连接点。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(944),alt:"./images"}})]),t._v(" "),r("h2",{attrs:{id:"_8、切入点-记住"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、切入点-记住"}},[t._v("#")]),t._v(" 8、切入点[记住]")]),t._v(" "),r("p",[t._v("定位连接点的方式。")]),t._v(" "),r("p",[t._v("每个类的方法中都包含多个连接点，所以连接点是类中客观存在的事物（从逻辑上来说）。")]),t._v(" "),r("p",[t._v("如果把连接点看作数据库中的记录，那么切入点就是查询记录的 SQL 语句。")]),t._v(" "),r("p",[t._v("Spring 的 AOP 技术可以通过切入点定位到特定的连接点。")]),t._v(" "),r("p",[t._v("切点通过 org.springframework.aop.Pointcut 接口进行描述，它使用类和方法作为连接点的查询条件。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter02/verse03.html"}},[t._v("上一节")]),t._v(" "),r("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter02/index.html"}},[t._v("回目录")]),t._v(" "),r("RouterLink",{attrs:{to:"/pro001-fengJie/pro004-Spring/lecture/chapter02/verse05.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);a.default=s.exports},941:function(t,a,_){t.exports=_.p+"assets/img/img007.9ad7afe5.png"},942:function(t,a,_){t.exports=_.p+"assets/img/img008.ea600562.png"},943:function(t,a,_){t.exports=_.p+"assets/img/img009.a0b70cb3.png"},944:function(t,a,_){t.exports=_.p+"assets/img/img010.5af189f7.png"}}]);