(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{201:function(t,n,e){"use strict";e.r(n);var l=e(0),d=Object(l.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"html标签：表单标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html标签：表单标签","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML标签：表单标签")]),t._v(" "),e("pre",[e("code",[t._v("1. HTML标签：表单标签\n\n2. CSS：\n")])]),t._v(" "),e("h2",{attrs:{id:"html标签：表单标签-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html标签：表单标签-2","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML标签：表单标签")]),t._v(" "),e("pre",[e("code",[t._v("* 表单：\n\t* 概念：用于采集用户输入的数据的。用于和服务器进行交互。\n\t* form：用于定义表单的。可以定义一个范围，范围代表采集用户数据的范围\n        * 属性：\n            * action：指定提交数据的URL\n            * method:指定提交方式\n                * 分类：一共7种，2种比较常用\n                   * get：\n                        1. 请求参数会在地址栏中显示。会封装到请求行中(HTTP协议后讲解)。\n                        2. 请求参数大小是有限制的。\n                        3. 不太安全。\n                   * post：\n                        2. 请求参数不会再地址栏中显示。会封装在请求体中(HTTP协议后讲解)\n                        2. 请求参数的大小没有限制。\n                        3. 较为安全。\n\n        * 表单项中的数据要想被提交：必须指定其name属性\n\n\n\t* 表单项标签：\n\t\t* input：可以通过type属性值，改变元素展示的样式\n\t\t\t* type属性：\n\t\t\t\t* text：文本输入框，默认值\n\t\t\t\t\t* placeholder：指定输入框的提示信息，当输入框的内容发生变化，会自动清空提示信息\t\n\t\t\t\t* password：密码输入框\n\t\t\t\t* radio:单选框\n\t\t\t\t\t* 注意：\n\t\t\t\t\t\t1. 要想让多个单选框实现单选的效果，则多个单选框的name属性值必须一样。\n\t\t\t\t\t\t2. 一般会给每一个单选框提供value属性，指定其被选中后提交的值\n\t\t\t\t\t\t3. checked属性，可以指定默认值\n\t\t\t\t* checkbox：复选框\n\t\t\t\t\t* 注意：\n\t\t\t\t\t\t1. 一般会给每一个单选框提供value属性，指定其被选中后提交的值\n\t\t\t\t\t\t2. checked属性，可以指定默认值\n\n\t\t\t\t* file：文件选择框\n\t\t\t\t* hidden：隐藏域，用于提交一些信息。\n\t\t\t\t* 按钮：\n\t\t\t\t\t* submit：提交按钮。可以提交表单\n\t\t\t\t\t* button：普通按钮\n\t\t\t\t\t* image：图片提交按钮\n\t\t\t\t\t\t* src属性指定图片的路径\t\n\n\t\t   * label：指定输入项的文字描述信息\n\t\t\t   * 注意：\n\t\t\t\t   * label的for属性一般会和 input 的 id属性值 对应。如果对应了，则点击label区域，会让input输入框获取焦点。\n\t\t* select: 下拉列表\n\t\t\t* 子元素：option，指定列表项\n\t\t\t\n\t\t* textarea：文本域\n\t\t\t* cols：指定列数，每一行有多少个字符\n\t\t\t* rows：默认多少行。\n")])]),t._v(" "),e("h2",{attrs:{id:"css：页面美化和布局控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css：页面美化和布局控制","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS：页面美化和布局控制")]),t._v(" "),e("pre",[e("code",[t._v('1. 概念： Cascading Style Sheets 层叠样式表\n\t* 层叠：多个样式可以作用在同一个html的元素上，同时生效\n\n2. 好处：\n\t1. 功能强大\n\t2. 将内容展示和样式控制分离\n\t\t* 降低耦合度。解耦\n\t\t* 让分工协作更容易\n\t\t* 提高开发效率\n\n\n3. CSS的使用：CSS与html结合方式\n\t1. 内联样式\n\t\t * 在标签内使用style属性指定css代码\n\t\t * 如：<div style="color:red;">hello css</div>\n\t2. 内部样式\n\t\t* 在head标签内，定义style标签，style标签的标签体内容就是css代码\n\t\t* 如：\n\t\t\t<style>\n\t\t        div{\n\t\t            color:blue;\n\t\t        }\n\t\t\n\t\t    </style>\n\t\t\t<div>hello css</div>\n\t3. 外部样式\n\t\t1. 定义css资源文件。\n\t\t2. 在head标签内，定义link标签，引入外部的资源文件\n\t\t* 如：\n    \t\t* a.css文件：\n\t\t\t\tdiv{\n\t\t\t\t    color:green;\n\t\t\t\t}\n\t\t\t<link rel="stylesheet" href="css/a.css">\n\t\t\t<div>hello css</div>\n\t\t\t<div>hello css</div>\n\n\t* 注意：\n\t\t* 1,2,3种方式 css作用范围越来越大\n\t\t* 1方式不常用，后期常用2,3\n\t\t* 3种格式可以写为：\n\t\t\t<style>\n\t\t        @import "css/a.css";\n\t\t    </style>\n\n4. css语法：\n\t* 格式：\n\t\t选择器 {\n\t\t\t属性名1:属性值1;\n\t\t\t属性名2:属性值2;\n\t\t\t...\n\t\t}\n\t* 选择器:筛选具有相似特征的元素\n\t* 注意：\n\t\t* 每一对属性需要使用；隔开，最后一对属性可以不加；\n\n\n5. 选择器：筛选具有相似特征的元素\n\t* 分类：\n\t\t1. 基础选择器\n\t\t\t1. id选择器：选择具体的id属性值的元素.建议在一个html页面中id值唯一\n\t\t        * 语法：#id属性值{}\n\t\t    2. 元素选择器：选择具有相同标签名称的元素\n\t\t        * 语法： 标签名称{}\n\t\t        * 注意：id选择器优先级高于元素选择器\n\t\t    3. 类选择器：选择具有相同的class属性值的元素。\n\t\t        * 语法：.class属性值{}\n\t\t        * 注意：类选择器选择器优先级高于元素选择器\n\t\t2. 扩展选择器：\n\t\t\t1. 选择所有元素：\n\t\t\t\t* 语法： *{}\n\t\t\t2. 并集选择器：\n\t\t\t\t* 选择器1,选择器2{}\n\t\t\t\n\t\t\t3. 子选择器：筛选选择器1元素下的选择器2元素\n\t\t\t\t* 语法：  选择器1 选择器2{}\n\t\t\t4. 父选择器：筛选选择器2的父元素选择器1\n\t\t\t\t* 语法：  选择器1 > 选择器2{}\n\n\t\t\t5. 属性选择器：选择元素名称，属性名=属性值的元素\n\t\t\t\t* 语法：  元素名称[属性名="属性值"]{}\n\n\t\t\t6. 伪类选择器：选择一些元素具有的状态\n\t\t\t\t* 语法： 元素:状态{}\n\t\t\t\t* 如： <a>\n\t\t\t\t\t* 状态：\n\t\t\t\t\t\t* link：初始化的状态\n\t\t\t\t\t\t* visited：被访问过的状态\n\t\t\t\t\t\t* active：正在访问状态\n\t\t\t\t\t\t* hover：鼠标悬浮状态\n6. 属性\n\t1. 字体、文本\n\t\t* font-size：字体大小\n\t\t* color：文本颜色\n\t\t* text-align：对其方式\n\t\t* line-height：行高 \n\t2. 背景\n\t\t* background：\n\t3. 边框\n\t\t* border：设置边框，符合属性\n\t4. 尺寸\n\t\t* width：宽度\n\t\t* height：高度\n\t5. 盒子模型：控制布局\n\t\t* margin：外边距\n\t\t* padding：内边距\n\t\t\t* 默认情况下内边距会影响整个盒子的大小\n\t\t\t* box-sizing: border-box;  设置盒子的属性，让width和height就是最终盒子的大小\n\n\t\t* float：浮动\n\t\t\t* left\n\t\t\t* right\n')])]),t._v(" "),e("h2",{attrs:{id:"案例："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#案例：","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例：")]),t._v(" "),e("pre",[e("code",[t._v('\t<!DOCTYPE html>\n\t<html lang="en">\n\t<head>\n\t    <meta charset="UTF-8">\n\t    <title>注册页面</title>\n\t<style>\n\t    *{\n\t        margin: 0px;\n\t        padding: 0px;\n\t        box-sizing: border-box;\n\t    }\n\t    body{\n\t        background: url("img/register_bg.png") no-repeat center;\n\t        padding-top: 25px;\n\t    }\n\t\n\t    .rg_layout{\n\t        width: 900px;\n\t        height: 500px;\n\t        border: 8px solid #EEEEEE;\n\t        background-color: white;\n\t        /*让div水平居中*/\n\t        margin: auto;\n\t    }\n\t\n\t    .rg_left{\n\t        /*border: 1px solid red;*/\n\t        float: left;\n\t        margin: 15px;\n\t    }\n\t    .rg_left > p:first-child{\n\t        color:#FFD026;\n\t        font-size: 20px;\n\t    }\n\t\n\t    .rg_left > p:last-child{\n\t        color:#A6A6A6;\n\t        font-size: 20px;\n\t\n\t    }\n\n\n\t    .rg_center{\n\t        float: left;\n\t       /* border: 1px solid red;*/\n\t\n\t    }\n\t\n\t    .rg_right{\n\t        /*border: 1px solid red;*/\n\t        float: right;\n\t        margin: 15px;\n\t    }\n\t\n\t    .rg_right > p:first-child{\n\t        font-size: 15px;\n\t\n\t    }\n\t    .rg_right p a {\n\t        color:pink;\n\t    }\n\t\n\t    .td_left{\n\t        width: 100px;\n\t        text-align: right;\n\t        height: 45px;\n\t    }\n\t    .td_right{\n\t        padding-left: 50px ;\n\t    }\n\t\n\t    #username,#password,#email,#name,#tel,#birthday,#checkcode{\n\t        width: 251px;\n\t        height: 32px;\n\t        border: 1px solid #A6A6A6 ;\n\t        /*设置边框圆角*/\n\t        border-radius: 5px;\n\t        padding-left: 10px;\n\t    }\n\t    #checkcode{\n\t        width: 110px;\n\t    }\n\t\n\t    #img_check{\n\t        height: 32px;\n\t        vertical-align: middle;\n\t    }\n\t\n\t    #btn_sub{\n\t        width: 150px;\n\t        height: 40px;\n\t        background-color: #FFD026;\n\t        border: 1px solid #FFD026 ;\n\t    }\n\t\n\t</style>\n\t\n\t</head>\n\t<body>\n\t\n\t<div class="rg_layout">\n\t    <div class="rg_left">\n\t        <p>新用户注册</p>\n\t        <p>USER REGISTER</p>\n\t\n\t    </div>\n\t\n\t    <div class="rg_center">\n\t        <div class="rg_form">\n\t            \x3c!--定义表单 form--\x3e\n\t            <form action="#" method="post">\n\t                <table>\n\t                    <tr>\n\t                        <td class="td_left"><label for="username">用户名</label></td>\n\t                        <td class="td_right"><input type="text" name="username" id="username" placeholder="请输入用户名"></td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label for="password">密码</label></td>\n\t                        <td class="td_right"><input type="password" name="password" id="password" placeholder="请输入密码"></td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label for="email">Email</label></td>\n\t                        <td class="td_right"><input type="email" name="email" id="email" placeholder="请输入邮箱"></td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label for="name">姓名</label></td>\n\t                        <td class="td_right"><input type="text" name="name" id="name" placeholder="请输入姓名"></td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label for="tel">手机号</label></td>\n\t                        <td class="td_right"><input type="text" name="tel" id="tel" placeholder="请输入手机号"></td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label>性别</label></td>\n\t                        <td class="td_right">\n\t                            <input type="radio" name="gender" value="male"> 男\n\t                            <input type="radio" name="gender" value="female"> 女\n\t                        </td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label for="birthday">出生日期</label></td>\n\t                        <td class="td_right"><input type="date" name="birthday" id="birthday" placeholder="请输入出生日期"></td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td class="td_left"><label for="checkcode" >验证码</label></td>\n\t                        <td class="td_right"><input type="text" name="checkcode" id="checkcode" placeholder="请输入验证码">\n\t                            <img id="img_check" src="img/verify_code.jpg">\n\t                        </td>\n\t                    </tr>\n\n\n\t                    <tr>\n\t                        <td colspan="2" align="center"><input type="submit" id="btn_sub" value="注册"></td>\n\t                    </tr>\n\t                </table>\n\t\n\t            </form>\n\n\n\t        </div>\n\n\t    </div>\n\n\t    <div class="rg_right">\n\t        <p>已有账号?<a href="#">立即登录</a></p>\n\t    </div>\n\n\n\t</div>\n')])]),t._v(" "),e("p",[t._v("​\t\t\n")])])},[],!1,null,null,null);n.default=d.exports}}]);