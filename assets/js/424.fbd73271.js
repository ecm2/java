(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{2086:function(t,e,s){"use strict";s.r(e);var _=s(44),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1、服务的概念"}},[t._v("1、服务的概念")])]),s("li",[s("a",{attrs:{href:"#_2、centos6服务"}},[t._v("2、CentOS6服务")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1service命令"}},[t._v("①service命令")])]),s("li",[s("a",{attrs:{href:"#_2chkconfig命令"}},[t._v("②chkconfig命令")])]),s("li",[s("a",{attrs:{href:"#_3运行级别"}},[t._v("③运行级别")])]),s("li",[s("a",{attrs:{href:"#_4防火墙"}},[t._v("④防火墙")])])])]),s("li",[s("a",{attrs:{href:"#_3、centos7服务"}},[t._v("3、CentOS7服务")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1systemctl命令"}},[t._v("①systemctl命令")])]),s("li",[s("a",{attrs:{href:"#_2systemctl命令代替chkconfig命令"}},[t._v("②systemctl命令代替chkconfig命令")])]),s("li",[s("a",{attrs:{href:"#_3centos7简化了运行级别"}},[t._v("③CentOS7简化了运行级别")])]),s("li",[s("a",{attrs:{href:"#_4关闭防火墙"}},[t._v("④关闭防火墙")])])])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"第二节-linux系统的服务管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二节-linux系统的服务管理"}},[t._v("#")]),t._v(" 第二节 Linux系统的服务管理")]),t._v(" "),s("h2",{attrs:{id:"_1、服务的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、服务的概念"}},[t._v("#")]),t._v(" 1、服务的概念")]),t._v(" "),s("p",[t._v("操作系统中在后台持续运行的程序，本身并没有操作界面，需要通过端口号访问和操作。CentOS 6和CentOS 7的服务管理有很大区别，我们分别来看。")]),t._v(" "),s("h2",{attrs:{id:"_2、centos6服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、centos6服务"}},[t._v("#")]),t._v(" 2、CentOS6服务")]),t._v(" "),s("h3",{attrs:{id:"_1service命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1service命令"}},[t._v("#")]),t._v(" ①service命令")]),t._v(" "),s("p",[t._v("启动服务：service  服务名 start")]),t._v(" "),s("p",[t._v("停止服务：service  服务名 stop")]),t._v(" "),s("p",[t._v("重启服务：service  服务名 restart")]),t._v(" "),s("p",[t._v("重新加载服务：service  服务名 reload")]),t._v(" "),s("p",[t._v("查看服务状态：service  服务名 status")]),t._v(" "),s("h3",{attrs:{id:"_2chkconfig命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2chkconfig命令"}},[t._v("#")]),t._v(" ②chkconfig命令")]),t._v(" "),s("p",[t._v("查看服务列表：chkconfig [--list]")]),t._v(" "),s("p",[t._v("设置具体服务开机自动启动状态：chkconfig 服务名 on/off")]),t._v(" "),s("blockquote",[s("p",[t._v("思考：你能否区分清楚这两种状态呢？")]),t._v(" "),s("p",[t._v("服务现在是否运行")]),t._v(" "),s("p",[t._v("服务是否开机自动运行")])]),t._v(" "),s("h3",{attrs:{id:"_3运行级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3运行级别"}},[t._v("#")]),t._v(" ③运行级别")]),t._v(" "),s("p",[t._v("vim /etc/inittab查看系统配置。CentOS6系统使用0~6这7个数字来控制Linux系统的启动方式。")]),t._v(" "),s("p",[t._v("运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动")]),t._v(" "),s("p",[t._v("运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆")]),t._v(" "),s("p",[t._v("运行级别2：多用户状态(没有NFS)，没有网络服务")]),t._v(" "),s("p",[t._v("运行级别3：完全的多用户状态(有NFS)，登录后进入控制台命令行模式")]),t._v(" "),s("p",[t._v("运行级别4：系统未使用，保留")]),t._v(" "),s("p",[t._v("运行级别5：X11表示控制台，进入图形界面")]),t._v(" "),s("p",[t._v("运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("常用的是3或5")]),t._v("。")]),t._v(" "),s("p",[t._v("chkconfig命令使用--level参数和一个数值可以控制一个服务在某个运行级别的是否自动启动。")]),t._v(" "),s("h3",{attrs:{id:"_4防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4防火墙"}},[t._v("#")]),t._v(" ④防火墙")]),t._v(" "),s("p",[t._v("防火墙默认会阻止绝大部分端口号的访问，在实际生产环境下，运维工程师需要为服务器设置详细的访问规则。在练习过程中，我们为了方便建议把防火墙直接关闭。由于防火墙服务默认开机自动启动，所以除了"),s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("停止服务")]),t._v("，还要设置为"),s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("开机不自动启动")]),t._v("。")]),t._v(" "),s("p",[t._v("服务名：iptables")]),t._v(" "),s("p",[t._v("停止防火墙：service iptables stop")]),t._v(" "),s("p",[t._v("设置开机不自动启动：chkconfig iptables off")]),t._v(" "),s("h2",{attrs:{id:"_3、centos7服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、centos7服务"}},[t._v("#")]),t._v(" 3、CentOS7服务")]),t._v(" "),s("h3",{attrs:{id:"_1systemctl命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1systemctl命令"}},[t._v("#")]),t._v(" ①systemctl命令")]),t._v(" "),s("p",[t._v("启动服务：systemctl start 服务名(xxxx.service)")]),t._v(" "),s("p",[t._v("重启服务：systemctl restart 服务名(xxxx.service)")]),t._v(" "),s("p",[t._v("停止服务：systemctl stop 服务名(xxxx.service)")]),t._v(" "),s("p",[t._v("重新加载服务：systemctl reload 服务名(xxxx.service)")]),t._v(" "),s("p",[t._v("查看服务状态：systemctl status 服务名(xxxx.service)")]),t._v(" "),s("h3",{attrs:{id:"_2systemctl命令代替chkconfig命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2systemctl命令代替chkconfig命令"}},[t._v("#")]),t._v(" ②systemctl命令代替chkconfig命令")]),t._v(" "),s("p",[t._v("查看服务状态：systemctl list-unit-files")]),t._v(" "),s("p",[t._v("设置或取消服务开机自动启动：")]),t._v(" "),s("blockquote",[s("p",[t._v("设置开机自动启动：systemctl enable 服务名")]),t._v(" "),s("p",[t._v("取消开机自动启动：systemctl disable 服务名")])]),t._v(" "),s("h3",{attrs:{id:"_3centos7简化了运行级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3centos7简化了运行级别"}},[t._v("#")]),t._v(" ③CentOS7简化了运行级别")]),t._v(" "),s("p",[t._v("cat /etc/inittab")]),t._v(" "),s("blockquote",[s("p",[t._v("# inittab is no longer used when using systemd.")]),t._v(" "),s("p",[t._v("#")]),t._v(" "),s("p",[t._v("# ADDING CONFIGURATION HERE WILL HAVE NO EFFECT ON YOUR SYSTEM.")]),t._v(" "),s("p",[t._v("#")]),t._v(" "),s("p",[t._v("# Ctrl-Alt-Delete is handled by /usr/lib/systemd/system/ctrl-alt-del.target")]),t._v(" "),s("p",[t._v("#")]),t._v(" "),s("p",[t._v("# systemd uses 'targets' instead of runlevels. By default, there are two main targets:")]),t._v(" "),s("p",[t._v("#")]),t._v(" "),s("p",[t._v("# multi-user.target: analogous to runlevel 3")]),t._v(" "),s("p",[t._v("# graphical.target: analogous to runlevel 5")]),t._v(" "),s("p",[t._v("#")]),t._v(" "),s("p",[t._v("# To view current default target, run:")]),t._v(" "),s("p",[t._v("# systemctl get-default")]),t._v(" "),s("p",[t._v("#")]),t._v(" "),s("p",[t._v("# To set a default target, run:")]),t._v(" "),s("p",[t._v("# systemctl set-default TARGET.target")])]),t._v(" "),s("h3",{attrs:{id:"_4关闭防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4关闭防火墙"}},[t._v("#")]),t._v(" ④关闭防火墙")]),t._v(" "),s("p",[t._v("systemctl disable firewalld.service")]),t._v(" "),s("p",[t._v("systemctl stop firewalld.service")]),t._v(" "),s("p",[t._v("请大家记住："),s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("斩草要除根")]),t._v("。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter04/verse01-auth.html"}},[t._v("上一节")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter04/index.html"}},[t._v("回目录")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter04/verse03-shell.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);e.default=v.exports}}]);