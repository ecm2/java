(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{2088:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1、京东"}},[s._v("1、京东")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1问题1"}},[s._v("①问题1：")])]),a("li",[a("a",{attrs:{href:"#_2问题2"}},[s._v("②问题2：")])])])]),a("li",[a("a",{attrs:{href:"#_2、新浪"}},[s._v("2、新浪")])]),a("li",[a("a",{attrs:{href:"#_3、金和网络"}},[s._v("3、金和网络")])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"第五节-字符串命令-面试真题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五节-字符串命令-面试真题"}},[s._v("#")]),s._v(" 第五节 字符串命令：面试真题")]),s._v(" "),a("h2",{attrs:{id:"_1、京东"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、京东"}},[s._v("#")]),s._v(" 1、京东")]),s._v(" "),a("h3",{attrs:{id:"_1问题1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1问题1"}},[s._v("#")]),s._v(" ①问题1：")]),s._v(" "),a("p",[s._v("使用Linux命令查询file1中空行所在的行号")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@hadoop101 datas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^$/{print NR}'")]),s._v(" sed.txt \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2问题2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2问题2"}},[s._v("#")]),s._v(" ②问题2：")]),s._v(" "),a("p",[s._v("有文件chengji.txt内容如下:")]),s._v(" "),a("p",[s._v("张三 40")]),s._v(" "),a("p",[s._v("李四 50")]),s._v(" "),a("p",[s._v("王五 60")]),s._v(" "),a("p",[s._v("使用Linux命令计算第二列的和并输出")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@hadoop101 datas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" chengji.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{sum+="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("} END{print sum}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@apple workspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# awk \'{sum+=$2} {print $1","$2} END{print "总分："sum}\' chengji.txt ')]),s._v("\n张三,50\n小红,60\n小刚,100\n总分：210\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2、新浪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、新浪"}},[s._v("#")]),s._v(" 2、新浪")]),s._v(" "),a("p",[s._v("用shell写一个脚本，对文本中无序的一列数字排序")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS6-2 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat test.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS6-2 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sort -n test.txt|awk '{a+=$1;print $1}END{print \"SUM=\"a}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"_3、金和网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、金和网络"}},[s._v("#")]),s._v(" 3、金和网络")]),s._v(" "),a("p",[s._v("请用shell脚本写出查找当前文件夹（/home）下所有的文本文件内容中包含有字符”shen”的文件名称")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@hadoop101 datas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -r "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shen"')]),s._v(" /home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n/home/atguigu/datas/sed.txt\n/home/atguigu/datas/cut.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@apple workspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# grep -r "shen" /root/workspace/')]),s._v("\n/root/workspace/sed.txt:dong shen\n/root/workspace/cut.txt:dong shen\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@apple workspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep -r \"shen\" /root/workspace/ | awk -F : '{print $1}'")]),s._v("\n/root/workspace/sed.txt\n/root/workspace/cut.txt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@apple workspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep -r \"shen\" /root/workspace/ | awk -F : '{print $1}' | awk -F '/' '{print $4}'")]),s._v("\nsed.txt\ncut.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter03/verse05-07-xargs.html"}},[s._v("上一条")]),s._v(" "),a("RouterLink",{attrs:{to:"/pro001-fengJie/pro006-Linux/lecture/chapter03/verse05-00-index.html"}},[s._v("回目录")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);