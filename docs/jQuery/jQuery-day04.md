## jQuery-day04

## 层级布局关系

层级注意：
   1. z-index 层级要生效，这个盒子必须是定位，绝对定位，相对定位，固定定位都行

   2. z-index 受定位父级元素约束。

  

  约定，可以给定位的元素分层：

1. 1  - 10    普通定位元素，如下拉菜单，轮播图的左右箭头，小圆点

2. 11 - 20   如：固定的侧边栏，固定的头部

3. 21 - 30   如：模态窗口，登录窗口，会把整个页面遮住

   

## 链式编程原理：

在函数执行完毕后 return this。
注意：
    JQ大部分函数内部都会返回JQ对象，所以可以继续链式编程。
哪些不行，举例子？
    .text()     获取文本的时候就不能链式编程。
    .val()      获取的时候
    .css()      获取的时候
    .offset()   获取的时候

```js
var obj = {
    name: '小明',
    age: 18,
    sayHi: function () {
        console.log('你好，我叫' + this.name);
        return this;
    },
    sayAge: function () {
        console.log('我今年' + this.age);
        return this;
    }
};
// var res = obj.sayHi();
// console.log(res);
obj.sayHi().sayAge().sayHi();
```



## each遍历

```js
$(function () {
    var numArr = [11, 22, 33, 44, 55];
    // for (var i = 0; i < numArr.length; i++) {
    //     console.log(numArr[i]);
    // }
    /* 1、用 each 遍历数组 */
    $.each(numArr, function (a, b) {
        console.log(a);
        console.log(b);
    });
    var obj = {
        name: '小明',
        age: 18,
        sex: '男'
    };
    /* 原生JS遍历 */
    // for (var key in obj) {
    //     // console.log(key);
    //     console.log(key, obj[key]);
    // }
    /* 1、JQ 用 each 遍历对象 */
    $.each(obj, function (a, b) {
        console.log(a, b);
    });
    /**
     *      each 第二种用法
     *
     *          $.each(数组/对象, function(参数1, 参数2){
     *              // 参数1 和 参数2 可以先到控制台输出，了解功能后再使用。
     *          })
     *
     *      以后学习到 ECMAScript 6：
     *          也有很多原生JS的遍历方法，如： forEach, filter 等都是遍历函数。
     *
     * */
});
```



## end方法

```js
$(function () {
    $('input').click(function () {
        /* 这里是 this */
        $(this).addClass('on')
        /* 这里变成了兄弟 siblings */
            .siblings().removeClass('on')
        /* end 回退一级，变回来 this */
            .end().val('666');
    });
});
```



## 释放$控制权函数

```js
jQuery(function () {
    // console.log($ === jQuery);
    /**
     *
     *      no Conflict  直接翻译是 '不冲突' 的意思
     *      防止 jQuery 的 $ 函数名称和其他库冲突，
     *      提供释放 $ 控制权的解决方案。
     *
     **/
    /* 释放 $ 控制权，用 变量 itcast 保存 JQ 顶级对象 */
    var itcast = jQuery.noConflict();
    console.log($);                     // 你老大写的$函数
    console.log(itcast === jQuery);     // true
});
```



## JQ插件-实例方法

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {

            // console.log($);
            console.dir($);

            /**
             *      $ 或 jQuery
             *          既是 函数，又是 对象
             *
             *      $ 对象身上有很多方法  -  静态方法
             *          $.each()
             *          $.trim()
             *          $.extend()          合并(拓展)对象
             *
             *          以后PHP时候用到的
             *          $.ajax()  $.get()  $.post()
             *
             *      $()  函数也有很多方法 -  实例方法，$() 选中某个元素后才能调用
             *          我们大部分学习到的是实例方法，需要先 $() 选中才能调用
             *
             *
             * */

            /* 自己制作插件 - 用沙箱函数套起来更安全，避免冲突和变量污染 */
            ;(function ($) {
                /* 给 jQuery 原型添加方法 - 需要实例JQ对象后，再使用 */
                console.log($.fn === $.prototype);      // true
                $.fn.aaaa = function () {
                    alert('aaaa');
                };

            })(jQuery);

            /* 调用插件 */
            /* $('div')  JQ实例对象，调用 aaaa 方法 */
            $('div').aaaa();


        });
    </script>
</head>
<body>
<div>盒子</div>
</body>
</html>
```

