# jQuery-day01

## JQ入口函数 和 原生JS的window.onload

相似点：
     可以让函数内的代码在最后执行，可以把代码写到头部。
区别：
     执行个数：
         window.onload      只会执行一个(赋值会覆盖)
         JQ入口函数          可执行多个(函数可多次调用)
     执行时机：（JQ入口函数优先执行）
         window.onload
             当浏览器资源(图片,外链文件等)加载完毕时候执行
         JQ入口函数
             DOM节点加载完毕就可以执行了，不需要等待资源文件加载。
     举个例子：
         浏览器加载网页，
         识别了 img 是个图片标签（JQ入口函数执行）
         识别图片标签的 src 属性，向服务器发送请求这个src的图片
         等待图片加载完毕，在页面中显示图片（window.onload执行）
 一句话小结：
     JQ入口函数优先执行，可执行多个。

```js
<!-- JQ套路第一步：JQ引包 -->
    <script src="lib/jquery-1.12.4.js"></script>
    <script>

        window.onload = function () {
            alert('JS的window.onload-----1');
        };
        window.onload = function () {
            alert('JS的window.onload-----2');
        };

        /* JQ套路第二步：入口函数 */
        $(function () {
            /* JQ套路第三步：业务代码 */
            alert('JQ的入口函数-----1');

        });
        $(function () {
            /* JQ套路第三步：业务代码 */
            alert('JQ的入口函数-----2');

        });
        /* JQ入口函数另一种写法 */
        $(document).ready(function () {
            alert('JQ的入口函数-----3');
        });
    </script>
```





## JQ 修改CSS行内样式

​    核心函数：
​        .css()
​    用法1：修改单个样式
​        .css('属性','值')
​    用法2：获取单个属性的值(不传值代表获取)
​        .css('属性')
​    用法3：修改多个样式(传入样式对象，同时修改多个)
​        .css({ 属性: 值 , 属性: 值 })
​    JQ的很多方法都用几种用法，
​        根据传参的不一样，调用不同的功能。

```js
<!-- JQ套路第一步：JQ引包 -->
<script src="lib/jquery-1.12.4.js"></script>
<script>
    /* JQ套路第二步：入口函数 */
    $(function () {
        /* JQ套路第三步：业务代码 */
        $('input').click(function () {
            /* 修改单个样式 */
            // $('div').css('width', '500px');
            // $('div').css('height', '500px');
            /* 修改多个样式 -- 重点掌握 */
            // $('div').css({
            //     width: 100,
            //     height: 100,
            //     backgroundColor: 'green'
            // });
            /* 获取单个样式 -- 也要注意 */
            var res = $('div').css('width');
            alert(res);
        });
    });
</script>

<script>
    /* JQ套路第二步：入口函数 */
    $(function () {
        /* JQ套路第三步：业务代码 */
        // 1. 立 flag
        var flag = false;
        $('#btnHideDiv').click(function () {
            // 2. 改 flag
            flag = !flag;
            if (flag) {
                $('div').css({
                    width: 300,
                    height: 300,
                    backgroundColor: 'orange'
                })
            } else {
                $('div').css({
                    width: 200,
                    height: 200,
                    backgroundColor: 'pink'
                })
            }
        });
    });
</script>
```



## JQ 控制类的方式修改CSS样式

.addClass()
    添加一个或多个类
.removeClass()
     删除一个或多个类
     注意：是在原有类名的基础上添加或删除。

​				类名和行内样式不要同时修改，否则行内样式权重高，覆盖类的代码。

.hasClass()
      检测是否有类，返回布尔类型的 true / false

.toggleClass()      -  重点
    切换一个或多个类，
        如果本来没有就添加类，如果有就移除

```js
<!-- JQ套路第一步：JQ引包 -->
<script src="lib/jquery-1.12.4.js"></script>
<script>
    /* JQ套路第二步：入口函数 */
    $(function () {
        /* JQ套路第三步：业务代码 */
        $('#btnHideDiv').click(function () {
            /* 添加类的时候只写类名，不要多个点 */
            $('div').addClass('style01');
            /* 删除类 */
            // $('div').removeClass('box');
        });
    });
</script>
```



## DOM 对象和 JQ对象

### DOM对象

之前学习查找DOM对象的方法
        document.getElementById()
        document.getElementsByTagName()
        document.querySelector()
        document.querySelectorAll()
    以上方法查找到的叫 DOM对象

### JQ对象

```
$(选择器)
  这种方式查找到的叫 JQ对象
注意：DOM 对象的属性、方法 和 JQ对象的属性、方法是不能直接调用的。
我们可以转换：
    1. DOM 对象转换成 JQ 对象
    语法：
        $(DOM对象)       用 $() 包装一下 DOM 对象就可以了
    注意：
        这里的DOM对象还包括 document, window, this，
        如果希望调用JQ的方法，$(document), $(window), $(this)
        
    2. JQ 对象转换成 DOM 对象
    JQ对象其实是基于DOM对象再进行包装。
    这些 DOM 对象在JQ中可以用<索引值>的方式获取到 DOM对象。
    语法：
        JQ对象[索引值]           // 推荐写法
        JQ对象.get(索引值)
    注意：
        这两种写法把JQ对象转成了DOM对象，可以调用DOM对象的方式书写代码。
        转换成DOM的同时就能调用JQ的方法了。
```



## JQ 事件处理函数中的 this

this 在JQ中也代表当前的事件源，
    但 this 是 DOM 对象，不能直接调用JQ的方法
解决办法：
    $(this) 转换成 JQ对象，就可以调用JQ方法了
注意：
    this 千万不能带引号

```js
$(function () {
    $('input').click(function () {
    // console.log(this);
    /* $(this) 转换成 JQ对象，注意 this 千万不能带引号 */
    $(this).addClass('on');
    });
});
```



## JQ排他思想

JQ 隐式迭代（你看不见的循环遍历，在JQ帮我们遍历了）
    $('input').click()
        可以给所有按钮添加点击事件，
        也就是说 .click() 函数有隐式迭代功能
    在JQ中几乎所有方法都有隐式迭代功能。
    所以JQ项目几乎可以不用for循环了。

```js
$(function () {
    $('input').click(function () {
    /* 排他思想 */
    /* 1. 清除所有 */
    $('input').removeClass('on');
    /* 2. 确立自己 */
    $(this).addClass('on');
    });
});
```



## JQ 链式编程。

​    JQ对象在调用完某个方法后，可以继续调用其他方法。
​    像链条一样连续书写，连续调用。



## JQ 关系选择器，都是方法，记得带括号

```
父
.parent()
子
.children()
兄
.siblings()      注意：带s的
         
显示隐藏切换
   显示          .show()
   隐藏          .hide()
   切换          .toggle()
   
hover 事件
   语法：
   .hover(事件处理函数1, 事件处理函数2)
   1、允许传入<两个>事件处理函数：
   鼠标移入执行<事件处理函数1>
   鼠标移出执行<事件处理函数2>
   .hover(事件处理函数)
   2、传入<一个>事件处理函数
   表示鼠标移入和鼠标移出，都执行这个事件处理函数
   
 JQ 基本选择器
     CSS怎么写，JQ就怎么写
     通过 id 查找           $('#id')
     通过 类名 查找         $('.class')
     通过 标签名 查找       $('标签名')
     通过 通配符 查找       $('*')
     通过 并集选择器 查找   $('选择器1 , 选择器2')   逗号
     通过 后代选择器 查找   $('选择器1   选择器2')   空格
     通过 子代选择器 查找   $('选择器1 > 选择器2')   大于号
     了解：
     通过 下一个兄弟 查找   $('选择器1 + 选择器2')   加号
     通过 后面所有兄弟 查找 $('选择器1 ~ 选择器2')   波浪线
     :nth-child()          这些都支持
     ::after,::before      伪元素不支持
```



