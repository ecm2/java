(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1450:function(t,a,r){t.exports=r.p+"assets/img/img009.582f9f1b.jpg"},1451:function(t,a,r){t.exports=r.p+"assets/img/img010.4f01a70d.jpg"},2093:function(t,a,r){"use strict";r.r(a);var s=r(44),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1、原理"}},[t._v("1、原理")])]),s("li",[s("a",{attrs:{href:"#_2、常见问题1-windows端虚拟网卡虚拟网络连接丢失"}},[t._v("2、常见问题1：Windows端虚拟网卡虚拟网络连接丢失")])]),s("li",[s("a",{attrs:{href:"#_3、常见问题2-虚拟网络连接ip地址乱了"}},[t._v("3、常见问题2：虚拟网络连接IP地址乱了")])]),s("li",[s("a",{attrs:{href:"#_4、常见问题3-各方面正常就是连不上"}},[t._v("4、常见问题3：各方面正常就是连不上")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"第五节-vmware软件联网原理说明与故障解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五节-vmware软件联网原理说明与故障解决"}},[t._v("#")]),t._v(" 第五节 VMWare软件联网原理说明与故障解决")]),t._v(" "),s("h2",{attrs:{id:"_1、原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、原理"}},[t._v("#")]),t._v(" 1、原理")]),t._v(" "),s("p",[s("img",{attrs:{src:r(1450),alt:"./images"}})]),t._v(" "),s("h2",{attrs:{id:"_2、常见问题1-windows端虚拟网卡虚拟网络连接丢失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、常见问题1-windows端虚拟网卡虚拟网络连接丢失"}},[t._v("#")]),t._v(" 2、常见问题1：Windows端虚拟网卡虚拟网络连接丢失")]),t._v(" "),s("p",[s("img",{attrs:{src:r(1451),alt:"./images"}})]),t._v(" "),s("p",[t._v("修复办法：")]),t._v(" "),s("ul",[s("li",[t._v("首先将Linux系统关机。")]),t._v(" "),s("li",[t._v("打开“虚拟网络编辑器”")]),t._v(" "),s("li",[t._v("点击“还原默认设置”（不保证和之前是同一个网段，所以大概率IP地址网段会变）")]),t._v(" "),s("li",[t._v("如果修复了虚拟网卡和虚拟网络连接\n"),s("ul",[s("li",[t._v("进入Linux系统修改IP地址，还是要求和虚拟网络编辑器中限定的网段一致")])])]),t._v(" "),s("li",[t._v("如果没有修复成功尝试下面操作\n"),s("ul",[s("li",[t._v("安装CCleaner软件")]),t._v(" "),s("li",[t._v("清理注册表")])])]),t._v(" "),s("li",[t._v("重新进入“虚拟网络编辑器”执行“还原默认设置”")]),t._v(" "),s("li",[t._v("如果还没有解决，可以尝试卸载VMWare并清理残留重新安装VMWare")]),t._v(" "),s("li",[t._v("如果还不行，重装Windows系统")])]),t._v(" "),s("h2",{attrs:{id:"_3、常见问题2-虚拟网络连接ip地址乱了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、常见问题2-虚拟网络连接ip地址乱了"}},[t._v("#")]),t._v(" 3、常见问题2：虚拟网络连接IP地址乱了")]),t._v(" "),s("p",[t._v("虚拟网卡还在，虚拟网络连接也在，但是和 NAT 方式对应的虚拟网络连接的 IP 不是 192.168.xxx.xxx 了，而是169.254.xxx.xxx。此时已经没法和 Linux 的 IP 保持同一个网段了。"),s("br")]),t._v(" "),s("p",[t._v("此时唯一的办法：在虚拟网络编辑器中“还原默认设置”。让 VMWare 的虚拟网络编辑器重置网络连接。")]),t._v(" "),s("h2",{attrs:{id:"_4、常见问题3-各方面正常就是连不上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、常见问题3-各方面正常就是连不上"}},[t._v("#")]),t._v(" 4、常见问题3：各方面正常就是连不上")]),t._v(" "),s("p",[t._v("检查一下是不是 Windows 系统中 VMware 的服务没有启动，如果是就把服务启动起来。或 Linux 网卡使用的是仅主机模式，而 Linux 中 IP 地址使用的是 NAT 模式的网段。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter04/verse04-environment.html"}},[t._v("上一节")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter04/index.html"}},[t._v("回目录")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);