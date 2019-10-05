# jQuery-day02

## JQ动画函数

​    .animate({ 样式对象 })
​    注意：

   1. 能给值是 px 的属性产生动画，

   2. 值本来是数字的属性也可以产生动画。

   3. 颜色默认不能产生动画，以后引入插件才可以
         .animate() 和 .css() 区别
                 .animate()      动画效果的变化
                 .css()          瞬间变化

         动画时间 - 控制动画快慢
             默认是 400 ，单位是 ms
             了解
                 normal      400
                 slow        600
                 fast        200

         动画形式 - 减速动画还是匀速动画
                 linear    匀速动画
                 PS：通过JQ插件可以有很多种动画形式

         动画回调函数 - 动画结束的时候执行
              用法和之前的 animate.js 一样

小结：
   .animate({样式对象}, 时间, 动画形式, 动画回调函数);
   .animate({样式对象}, 时间, 动画回调函数);
   样式对象是必要参数，其他3个为可选参数。

```js
/* 点击按钮，让盒子变宽变高变色 */
$('input').click(function () {
    $('#box01').animate({
        width: 800
    }, 4000, function () {
        console.log('动画结束执行');
    });
    /* 匀速动画 */
    $('#box02').animate({
        width: 800
    }, 4000, 'linear');
});
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #gameList {
            width: 1260px;
            height: 0;
            /* 记得有这行代码，超出隐藏 */
            overflow: hidden;
        }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            var flag = false;
            $('#btn').click(function () {
                flag = !flag;
                if (flag) {
                    $('#gameList').animate({
                        height: 530
                    })
                } else {
                    $('#gameList').animate({
                        height: 0
                    })
                }
            });
        });
    </script>
</head>
<body>
<input id="btn" type="button" value="点击展开">
<div id="gameList">
    <img src="images/gameList.png" height="530" alt="">
</div>
</body>
</html>
```



## JQ 便捷动画

```
滑动动画  - slide
.slideDown()        显示(最终display:block/inline-block)
.slideUp()          隐藏(最终display:none)
.slideToggle()      切换
特征：
主要变化的是高度
透明度动画  - fade
.fadeIn()           显示
.fadeOut()          隐藏
.fadeToggle()       切换
.fadeTo()           设置透明度
注意：
.fadeTo(400,0) 和 .fadeOut() 区别
fadeTo 只改变透明度，不隐藏盒子
fadeOut 最终会 display:none 隐藏盒子
对角线动画 - 变化 宽、高、透明度
.show()             显示(display:block)
.hide()             隐藏(display:none)
.toggle()           切换(display:block/none)

.delay(时间)
    添加到需要延时的动画前
    
注意：
对角线动画，不传时间参数，默认没有动画效果，直接显示或隐藏;
小结：
便捷动画都允许传入最多3个参数
1. 传入时间 控制动画快慢
2. 传入动画回调函数，在动画结束后执行
了解：
3. 传入 'linear'，变成匀速动画，注意这个参数书写在回调函数前
```

```js
$('input').click(function () {
    $('#box').slideUp(5000, 'linear', function () {
        alert('动画结束了');
    });
});
```



## 下拉菜单效果

   .hover()           鼠标移入和移出，都执行切换效果
   .stop()            清除(停止)动画队列
   .slideToggle()     高度(滑动)切换动画

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-color: pink;
        }

        .wrap li {
            background-color: hotpink;
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            /**
             *    下拉菜单效果
             *       .hover()           鼠标移入和移出，都执行切换效果
             *       .stop()            清除(停止)动画队列
             *       .slideToggle()     高度(滑动)切换动画
             **/
            $('.nav > li').hover(function () {
                $(this).children('ul').stop().slideToggle();
            });
        });
    </script>
</head>
<body>
<div class="wrap">
    <ul class="nav">
        <li>
            <a href="javascript:;">一级菜单1</a>
            <ul class="ul">
                <li><a href="javascript:;">二级菜单11</a></li>
                <li><a href="javascript:;">二级菜单12</a></li>
                <li><a href="javascript:;">二级菜单13</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">一级菜单2</a>
            <ul>
                <li><a href="javascript:;">二级菜单21</a></li>
                <li><a href="javascript:;">二级菜单22</a></li>
                <li><a href="javascript:;">二级菜单23</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">一级菜单3</a>
            <ul>
                <li><a href="javascript:;">二级菜单31</a></li>
                <li><a href="javascript:;">二级菜单32</a></li>
                <li><a href="javascript:;">二级菜单33</a></li>
            </ul>
        </li>
    </ul>
</div>

</body>
</html>
```

```js
$('input').click(function () {
    /* 切换 */
    // $('#box').fadeToggle(5000);
    // $('#box').fadeOut(400);
    $('#box').fadeTo(400, 0);
});
```



## 操作标签属性

​    .attr()           推荐使用
​        能设置和获取自定义属性
​    .prop()
​        能用布尔类型方式获取和修改表单checked、selected、disabled属性
​    注意：
​       大部分情况下，attr 和 prop 可以互换，功能相同。
​       自定义属性只能用 attr 获取，要获取表单布尔类型值的话用 prop

可以通过 removeAttr() 和 removeProp() 移除属性

```js
$('#btn01').click(function () {
    /* 单属性修改 */
    $('#pwd').prop('type', 'text');
    /* 多属性修改 */
    // $('#pwd').prop({
    //     type: 'text'
    // });
});
$('#btn02').click(function () {
    /* 单属性获取 */
    var res = $('#pwd').prop('disabled');
    alert(res);
});
$('#btn03').click(function () {
    $('#pwd').prop({
        disabled: false
    });
});
$('#btn01').click(function () {
    /* 如果类型是 password，改成 text 显示密码 */
    if ($('#pwd').attr('type') === 'password') {
        $('#pwd').attr({type: 'text'});
    } else {
        /* 其他情况变回来 password */
        $('#pwd').attr({type: 'password'});
    }
});
```



## text_html_val获取和设置

.text()   - 功能类似 innerText 属性
    获取       不传入参数代表获取
    设置       传入参数代表修改
.html()   - 功能类似 innerHTML 属性
    获取      不传参
    设置      传参
.val()    -  功能表单的 value 属性
    获取      不传参
    设置      传参
注意这3个都是方法，不要出现等号赋值的错误写法

```js
$(function () {
    /* =========  text()  ============= */
    /* 不传参代表获取，有返回值  */
    // var res = $('#box').text();
    // console.log(res);
    /* 传参代表设置 */
    // $('#box').text('<a href="http://www.baidu.com">6666</a>');
    /* =========  html()  ============= */
    /* 不传参代表获取，有返回值  */
    // var res = $('#box').html();
    // console.log(res);
    /* 传参代表设置 */
    // $('#box').html('<a href="http://www.baidu.com">6666</a>');
    
    $('#btn01').click(function () {
        /* 不传参代表获取，有返回值  */
        var res = $('#dropdown').val();
        console.log(res);
    });
    $('#btn02').click(function () {
        $('#txtbox').val(6666);
    });
});
```



## JQ节点操作

```
创建节点：
    $('<div>')                  创建div节点
    $('<div></div>')            创建div节点
    $('<div>写入内容</div>')     创建div节点并往div中添加内容
    注意：
        创建的节点默认是在内存中，需要手动添加到页面中
    
添加节点：
    <嵌套>添加：子节点到父节点中
    父元素.append(子节点)         后添加
    父元素.prepend(子节点)        前添加
    了解，会破坏链式编程
    子节点.appendTo(父元素)
    子节点.prependTo(父元素)
    <同级>添加
    同级元素.after(新节点)         同级后添加
    同级元素.before(新节点)        同级前添加
    了解，会破坏链式编程
    新节点.insertBefore(同级元素)
    新节点.insertAfter(同级元素)
    <包裹>添加
    自行查阅手册了解
    
删除和清空节点：
     清空节点:
        .empty()         清空节点
        .html('')        把html设置为空
           注意:
             .empty() 性能比 .html('') 好一些。
    删除节点：
        .remove()        删除节点
        功能：
            把选中的节点直接在页面中移除掉。
            
克隆节点：
    .clone()            克隆节点，只克隆结构
    .clone(true)        克隆节点，事件也会被克隆
    注意：
        克隆的节点默认在内存中，要手动添加到页面中。
        
替换节点：
    原节点.replaceWith(新节点)
    注意：
        被替换的原节点在页面中会消失。
```



微博发布

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>微博发布效果</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .weibo {
            width: 600px;
            border: 1px solid #ccc;

            margin: 100px auto;
            padding: 10px;

        }

        .weibo-text {
            width: 590px;
            height: 140px;
            padding: 5px;
            border: 1px solid #ccc;
            outline: none;
            resize: none;
        }

        .weibo-text:focus {
            border-color: #f60;
        }

        .weibo-btn {
            width: 80px;
            height: 30px;
            background-color: #f90;
            color: #fff;
            border: 0 none;
            margin-top: 5px;
            border-radius: 3px;
            cursor: pointer;
            outline: 0 none;
        }

        .weibo-list {
            padding-top: 10px;
        }

        .weibo-list li {
            font-size: 14px;
            line-height: 30px;
            border-bottom: 1px dotted #ccc;
            overflow: hidden;
        }

        .weibo-list li p {
            float: left;
        }

        .weibo-list li span {
            float: right;
            cursor: pointer;
        }

        .weibo-list li input {
            height: 24px;
            line-height: 24px;
            width: 300px;
            font-size: 14px;
            border: 0 none;
        }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            // 业务代码
            /**
             *      点击发布按钮 - 微博发布效果
             *          1. 判断输入微博的长度，如果为 0 提示，超过 120 提示
             *          2. 把输入的微博内容，添加到 .weibo-list 列表中
             *          3. 发布成功后，清空文本域 .weibo-text
             *          4. 发布的时候，有滑动显示动画效果
             *
             * */
            $('.weibo-btn').click(function () {
                /* 1.1 获取文本域的内容 */
                var str = $('.weibo-text').val();
                /* 1.2 判断内容的长度如果为0，弹窗提示 */
                if (str.length === 0) {
                    alert('不能发布空微博~~');
                    /* 1.3 如果长度超过 120，弹窗提示 */
                } else if (str.length > 120) {
                    alert('长话短说，不能超过120~~');
                } else {
                    /* 2. 把输入的微博内容，添加到 .weibo-list 列表中 */
                    /* 2.1 创建 li 标签 */
                    var tag = $('<li>' + '<p>' + str + '</p>' + '<span>删除</span>' + '</li>');
                    /* 2.2 添加到列表中 */
                    $('.weibo-list').prepend(tag);

                    /* 3. 发布成功后，清空文本域 .weibo-text */
                    $('.weibo-text').val('');

                    /* 4. 发布的时候，有滑动显示动画效果 */
                    $('.weibo-list li:first-child').hide().slideDown();
                }
            });
        });
    </script>
</head>

<body>
<div class="weibo">
    <textarea class="weibo-text"></textarea>
    <input class="weibo-btn" value="发布" type="button">
    <ul class="weibo-list">
        <li>
            <p>快来收了这九款用上就停不下来的应用吧！！</p>
            <span>删除</span>
        </li>
        <li>
            <p>超级详细的云南大理自助游攻略</p>
            <span>删除</span>
        </li>
        <li>
            <p>外国最近很火的舞蹈，舒服简单自然，太棒了！</p>
            <span>删除</span>
        </li>
    </ul>
</div>
</body>
</html>
```

