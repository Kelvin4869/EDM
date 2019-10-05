# jQuery-day03

## 普通事件绑定方式

​    直接把事件类型封装成了函数调用

```js
$('input').click(function () {
    $('#box').toggle();
});
/* mouseenter 和  mouseover 都代表鼠标移入 */
$('input').mouseover(function () {
    $('#box').toggle();
});
```



## 事件3要素

​    1. 事件源
​    2. 事件类型
​    3. 事件处理函数

### bind 三种写法：

​    事件源.bind('事件类型', 事件处理函数)
​    事件源.bind('事件类型1 事件类型2', 事件处理函数)
​    事件源.bind({ 事件类型1: 事件处理函数, 事件类型2: 事件处理函数 })

```js
$('input').bind({
    click: function () {
        $('#box').toggle();
    },
    mouseover: function () {
        alert();
    }
});
```



### 事件委派优点：

   1. 大量数据的列表要绑定事件，只需要绑定一次给其父级既可以了。

   2. 动态添加的子元素，也可以触发父级委派的事件。
  语法：
      委派父元素.delegate(子元素选择器, 事件类型, 事件处理函数)
  注意：
      !!由子元素选择器触发
      委派事件的父级元素不能是后添加的。
      事件处理函数内部的 this 指向当前触发的那个子元素。

  ​	注意 on 事件委派的参数顺序，先写事件类型，再写子元素选择器。

```js
/* 事件委派只需要一次，委派给父级 */
$('#box').delegate('li', 'click', function () {
    // alert('事件是委派给#box，但是由 li 触发');
    console.log(this);
});
```

```js
 /* 事件委派只需要一次，委派给父级 */
 $('#box').on('click', 'li', function () {
     // alert('事件是委派给#box，但是由 li 触发');
     console.log(this);
 });
```



 on 取代 bind 写法：
     事件源.on('事件类型', 事件处理函数)
     事件源.on('事件类型1 事件类型2', 事件处理函数)
     事件源.on({ 事件类型1: 事件处理函数, 事件类型2: 事件处理函数 })
 on 取代 delegate 事件委派写法：
     委派父元素.on(事件类型, 子元素选择器, 事件处理函数)



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
             *      ===========================================
             *
             *      点击其他元素实现删除，编辑效果
             *      ============= 事件委派实现 =================
             *
             *          5. 点击删除按钮，删除对应那条微博
             *          6. 点击 p 标签，p 标签能替换成 input 标签进行微博编辑
             *          7. input 标签失去焦点后，input 标签替换回 p 标签
             *
             *      ============ 事件触发器和事件对象 ==========
             *
             *          8. 页面打开的时候，通过事件触发器自动获取文本域的焦点
             *          9. 利用事件对象，判断回车键，实现按回车键发布微博。
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
                    var tag = $('<li>\n' +
                        '            <p>' + str + '</p>\n' +
                        '            <span>删除</span>\n' +
                        '        </li>');
                    /* 2.2 添加到列表中 */
                    $('.weibo-list').prepend(tag);

                    /* 3. 发布成功后，清空文本域 .weibo-text */
                    $('.weibo-text').val('');

                    /* 4. 发布的时候，有滑动显示动画效果 */
                    $('.weibo-list li:first-child').hide().slideDown();
                }
            });

            /**
             *      !!事件委派语法：
             *          委派父元素.on(事件类型, 子元素选择器, 事件处理函数)
             * */
            /* 5. 点击删除按钮删除微博 */
            /* 事件委派给了 父级 .weibo-list，后添加的 span 一样可以触发事件 */
            $('.weibo-list')
                .on('click', 'span', function () {
                    /* 5.1 当前 span 对应的父级滑动隐藏 */
                    $(this).parent().slideUp(400, function () {
                        /* 5.2 动画结束后移除当前父级元素 */
                        $(this).remove();
                    });
                })

                /* 6. 点击 p 标签，p 标签能替换成 input 标签进行微博编辑 */
                .on('click', 'p', function () {
                    /* 6.1 先保存p标签的文字内容 */
                    var str = $(this).text();
                    /* 6.2 把 当前 p 标签替换成 input 标签 */
                    var tag = $('<input type="text" value="' + str + '">');
                    $(this).replaceWith(tag);
                    /* 6.3 让新创建的 input 自动获取焦点 */
                    tag.trigger('focus');
                })

                /* 7. input 标签失去焦点 blur 后，input 标签替换回 p 标签 */
                .on('blur', 'input', function () {
                    /* 7.1 先保存input标签的内容，注意表单用 val() 获取 */
                    var str = $(this).val();
                    /* 6.2 把 当前 input 标签替换成 p 标签 */
                    $(this).replaceWith('<p>' + str + '</p>');
                });

            /* 8. 页面打开的时候，通过事件触发器自动获取文本域的焦点 */
            $('.weibo-text').trigger('focus');

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



## 事件对象

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #baba {
            width: 300px;
            height: 300px;
            background-color: pink;
        }

        #erzi {
            width: 100px;
            height: 100px;
            background-color: hotpink;
        }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            // 业务代码
            $('#baba').click(function () {
                console.log('你点击了爸爸');
            });
            $('#erzi').click(function (e) {
                console.log('你点击了儿子');
                /* 阻止事件冒泡 */
                e.stopPropagation();
                console.log(e);
            });

            $('#txt').keyup(function (e) {
                console.log(e);
                /* 按 ctrl键 + 回车键 发布 */
                if (e.ctrlKey && e.keyCode == 13) {
                    alert('发布')
                }
            });

        });
    </script>
</head>
<body>
<div id="baba">
    父级
    <div id="erzi">子级</div>
</div>
<input type="text" id="txt">
</body>
</html>
```



## off取代unbind,取代undelegate,解绑普通事件

```js
$('input').bind({
    click: function () {
        $('#box').toggle();
    },
    mouseover: function () {
        alert('鼠标移入事件');
    }
});
// $('input').unbind('click');
$('input').off('click');

/* 事件委派只需要一次，委派给父级 */
$('#box').delegate('li', 'click', function () {
    // alert('事件是委派给#box，但是由 li 触发');
    console.log(this);
    /* 点击一次后，就解绑了，抽奖效果往往就只能点击一次 */
    // $('#box').undelegate('li', 'click');
    $('#box').off('click', 'li');
});

$('input').click(function () {
    $('#box').toggle();
    /* off 解绑了 click 事件 */
    $('input').off('click');
});
```



## 鼠标移入移出事件

更好的鼠标移入和鼠标移开事件
    鼠标移入：
        mouseenter  取代  mouseover
    鼠标移出：
        mouseleave  取代  mouseout
注意：
    hover 其实就是调用了 mouseenter 和 mouseleave。



## 盒子尺寸

​    .width()
​        获取：
​            获取到数值型的数据
​        修改：
​            传入数值型数据可以修改盒子宽度
​    .height()
​        同理也可获取和修改

```js
/* 通过 css 函数获取，获取到字符串类型的数据 */
// var res = $('.baba').css('width');
// console.log(res);
/* 通过 .width() 函数获取，获取到数值型数据 */
var res = $('.baba').width();
console.log(res);
// $('.erzi').width(100);
// $('.erzi').height(100);
$('.erzi').click(function () {
    /* 了解：可传入回调函数，在原有基础上增加 10 px */
    $(".erzi").width(function (n, c) {
        console.log(n, c);
        return c + 10;
    });
});
```



## JQ获取和设置滚动距离

```
JQ获取和设置滚动距离
    获取：
        .scrollTop()
    设置：
        .scrollTop(距离值)
返回顶部效果：
    1. 无动画效果
        $('html,body').scrollTop(0);
    2. 带动画效果
        $('html,body').stop().animate({ scrollTop: 0 });
    注意：
        控制页面的滚动要同时选中 html 和 body 两个元素
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .floor {
            width: 1000px;
            height: 500px;
            margin: 0 auto;
        }

        .floor1 {
            background-color: pink;
        }

        .floor2 {
            background-color: deeppink;
        }

        .floor3 {
            background-color: gold;
        }

        .floor4 {
            background-color: hotpink;
        }

        .floor5 {
            background-color: skyblue;
        }

        .fixed-box {
            position: fixed;
            right: 0;
            top: 50%;
            margin-top: -125px;
            display: none;
        }

        .fixed-box li {
            list-style: none;
            cursor: pointer;
            width: 48px;
            line-height: 48px;
            border: 1px solid #fff;
            background-color: pink;
            text-align: center;
        }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            /**
             *      JQ获取和设置滚动距离
             *          获取：
             *              .scrollTop()
             *          设置：
             *              .scrollTop(距离值)
             *
             *      返回顶部效果：
             *          1. 无动画效果
             *              $('html,body').scrollTop(0);
             *          2. 带动画效果
             *              $('html,body').stop().animate({ scrollTop: 0 });
             *
             *          注意：
             *              控制页面的滚动要同时选中 html 和 body 两个元素
             *
             *
             * */
            $('#goTop').click(function () {
                /* 1. 无动画效果 */
                // $('html,body').scrollTop(0);
                /* 2. 带动画效果 */
                $('html,body').stop().animate({scrollTop: 0});

            });
        });
    </script>
</head>
<body>
<div class="floor floor1">一楼
    <input type="button" id="goFloor" value="跳转楼层4">
</div>
<div class="floor floor2">二楼</div>
<div class="floor floor3">三楼

</div>
<div class="floor floor4">四楼
</div>
<div class="floor floor5">五楼
    <input type="button" id="goTop" value="返回顶部">
</div>
</body>
</html>
```



##  获取元素的偏移坐标值  -   掌握

​     .offset()
​     返回结果：坐标对象 { left: xx, top: xx }

##  设置元素偏移坐标值值   -  了解

​      .offset({ left:xx , top: xx })

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .floor {
            width: 1000px;
            height: 500px;
            margin: 0 auto;
        }

        .floor1 {
            background-color: pink;
            height: 1000px;
        }

        .floor2 {
            background-color: deeppink;
        }

        .floor3 {
            background-color: gold;
        }

        .floor4 {
            background-color: hotpink;
        }

        .floor5 {
            background-color: skyblue;
        }

        .fixed-box {
            position: fixed;
            right: 0;
            top: 50%;
            margin-top: -125px;
            /*display: none;*/
        }

        .fixed-box li {
            list-style: none;
            cursor: pointer;
            width: 48px;
            line-height: 48px;
            border: 1px solid #fff;
            background-color: pink;
            text-align: center;
        }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            /**
             *      获取元素的偏移坐标值  -   掌握
             *          .offset()
             *          返回结果：坐标对象 { left: xx, top: xx }
             *
             *
             *      设置元素偏移坐标值值  -  了解
             *           .offset({ left:xx , top: xx })
             *
             * */
            $('.fixed-box li').click(function () {
                /* 1. 获取当前点击的li的索引值 */
                var index = $(this).index();
                /* 2. 根据索引值获取对应楼层的垂直偏移坐标值 */
                var floorTop = $('.floor').eq(index).offset().top;
                /* 3. 设置滚动的距离 */
                $('html,body').stop().animate({scrollTop: floorTop});
            });

        });
    </script>
</head>
<body>
<ul class="fixed-box">
    <li>一楼</li>
    <li>二楼</li>
    <li>三楼</li>
    <li>四楼</li>
    <li>五楼</li>
</ul>
<div class="floor floor1">一楼
    <input type="button" id="goFloor" value="跳转楼层4">
</div>
<div class="floor floor2">二楼</div>
<div class="floor floor3">三楼

</div>
<div class="floor floor4">四楼
</div>
<div class="floor floor5">五楼
    <input type="button" id="goTop" value="返回顶部">
</div>
</body>
</html>
```



## 滚动事件

​    .scroll()

```js
/* 给浏览器添加滚动事件 */
$(window).scroll(function () {
    /* 浏览器滚动的时候，动态获取页面滚动出去了多少距离 */
    var top = $('html,body').scrollTop() || $(window).scrollTop();
    // console.log(top);
    /* 如果滚动大于等于 到 500 的位置，就显示搜索框 */
    if (top >= 500) {
        $('#search').addClass('on');
    } else {
        /* 小于 500 ，就隐藏搜索框   */
        $('#search').removeClass('on');
    }
});
```



## JQ遍历函数  - each

​    第一种写法：
​        JQ对象.each(function(参数1,参数2){
​            参数1       表示遍历的索引值
​            参数2       当前遍历到的元素
​        });
​    each 还有第二种写法：
​        $.each(对象/数组,function(参数1,参数2){
​        });

```js
/* each 遍历函数，功能类似之前的 for 循环遍历 */
$('div').each(function (index, element) {
    // console.log(index);
    // console.log(element);
    /* 遍历每个元素，根据索引值添加不同的透明度 */
    $(element).css({
        opacity: '0.' + index
    });
});
```

