# React-day01

# React开发脚手架工具

[React脚手架](https://www.npmjs.com/package/create-react-app)(Facebook官方出品)

`npm start or yarn start`

`create-react-app my-testproject(项目名称)`

`cd my-testproject(项目名称)`

`npm start or yarn start`

# React核心概念

- 虚拟DOM(Virtual DOM)
- Diff算法(Diff Algorithm)
- 单向数据流渲染(Data Flow)
- 组件生命周期
- JSX
- 一切皆为组件

# React搭建开发环境(不用脚手架)

`mkdir react-demo`

`cd react-demo`

`npm init -y`

`npm install react react-dom -s`

`npm install webpack webpack-cli webpack-dev-server babel babel-cli babel-core babel-loader babel-preset-react babel-preset-env babel-preset-es2015 -D (解析JSX和ES6语法)`

- webpack.config.js

```js
module.exports = {
  entry: './main.js',
  output: {
    path: '/',
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015']
        }
      }
    }]
  }
}
```

- index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
```

- main.js

```js
// Component是react中提供的一个类,可以用来创建组件,将来我们创建的所有组件都必须继承Ccomponent这个类
import React, {Component} from 'react';
// react-dom包提供了dom特定的方法,可以在你的应用程序的顶层使用,如果你需要的话,也可以作为React模型之外的特殊操作DOM的接口,但大多数组件应该不需要使用这个模块
import ReactDom from 'react-dom';

// render方法有两个参数,第一个参数是要渲染的内容(组件),第二个参数是这个组件要渲染到的地方
ReactDom.render(
  <h1>hello world</h1>,
  document.getElementById('root')
);

class App extends Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

// 渲染一个React元素到由container提供的DOM中,并且返回组件的一个引用
ReactDom.render(
	<App/>,
  	document.getElementById('root')
)
```

- package.json

```json
"start": "webpack-dev-server --inline --hot --open --port 8090 --mode development"
```



# JSX

## JSX基本使用

```js
const element = <h1>hello world</h1>;
```

这种看起来可能有些奇怪得标签语法既不是字符串也不是HTML.

它被称为JSX,一种JavaScript的语法扩展,我们推荐在React使用JSX来描述用户界面

## JSX嵌套元素

注意:只能包含一个根节点

```
ReactDOM.render(
	// 模拟只能包含一个根节点
	<div>
		<h1>hello</h1>
		<h2>javk</h2>
	</div>,
	document.getElementById('root)
)
```

## JSX表达式

JSX表达式通过{}来使用,和vue当中的{{}}很类似,它也有它的合法使用方式

1. 直接在{}里面写一个变量
2. 数字的运算
3. 字符串拼接
4. 三元运算符(注意: if-else语句不行)
5. 函数

```js
const STR = 'hello world';
let age = 18;
function test(age, str) {
  return age + str;
}

ReactDOM.render(
	<div>
  		<div>{STR}</div>
  		<div>{1 + 2}</div>
  		<div>{'李' + 'Jack'}</div>
  		<div>{age>=18 ? '已成年' : '未成年'}</div>
  		<div>{test(23, 'jack')}</div>
  	</div>,
    document.getElementById('root')
)
```



## JSX注释

```jsx
{
  // 这是单行注释(注意单行注释一定要在大括号后面换行,不然也会被注释掉)
}

{
  /*
  * 多行注释
  * 多行注释
  */
}
```



## JSX属性

因为JSX的特性更接近JavaScript而不是HTML,所以React DOM使用camelCase小驼峰命名 来定义属性的名称, 而不是使用HTML的属性名称

1. html的class属性改为className
2. html中label标签的for属性改为htmlFor
3. 标签中的自定义属性使用data-开头

```js
import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  avatar: './avatar.jpg';
}

ReactDOM.render(
	<div>
  		<div>{STR}</div>
  		<div>{1 + 2}</div>
  		<img src={user.avatar}></img>
  		<div className="test">hahaha</div>
        <label htmlFor="sex">性别</label>
        <input type="text" id="sex" />
        <a href="www.frontendnav.top" tabIndex="1"></a>
  	</div>,
    document.getElementById('root')
)
```



## JSX样式

```js
import React from 'react';
import ReactDOM from 'react-dom';

const myStyle = {
  // React会自动在数值后面加上px,如果加上px,需要加引号
  // 这里只能写 驼峰命名 方式的属性
  // 这里是加逗号,不是加分号
  fontSize: 100,
  color: '#0094ff'
}

ReactDOM.render(
	<div>
  		<h1>hello</h1>
  		<h2 style='{mystyle}'>world</h2>
  	</div>,
    document.getElementById('root')
)
```



# React.createElement()

```js
import React from 'react';
import ReactDOM from 'react-dom';

// React.createElement 方法的作用,就是使用js创建内存中的虚拟DOM,生成一些普通的对象
// 这个对象接收至少三个参数
// 第一个参数: 指定要创建的元素标签类型[String]
// 第二个参数: 指定要创建的元素身上的属性[对象/null]
// 第三个参数: 指定当前创建的元素的子元素
let son = React.createElement('div', {className: 'color-red'}, '我是div里面的盒子');
let father = React.createElement('div', {className: 'color-red'}, '我是div盒子', son);

ReactDOM.render(
  	// 模板只能包含一个根节点
	father,
    document.getElementById('root')
)
```



# react-virtual-dom

# Diff算法

Diff算法会帮助我们计算出Virtual DOM中真正变化的部分,并只针对该部分进行实际DOM操作,而非重新渲染整个页面,从而保证每次操作更新后面的高效渲染,因此Virtual DOM 与diff是保证React性能口碑的幕后推手

传统Diff算法

传统diff算法通过循环递归对节点进行一次对比,效率低下,算法复杂度达到O(n^3),其中n是树中节点的总数

React Diff算法

Web UI中DOM节点跨层级的移动操作特别少,可以忽略不计

不同类型的两个元素将产生不同的树(根元素不同结构树一定不同)

开发人员可以在不同渲染之间使用key属性来表示哪些子元素是稳定的





# 组件-函数创建组件

组件名称必须以大写字母开头

创建组件,组件名一定要大写,函数名作为组件名使用

在函数内部必须要return一些内容,如果没有东西返回,必须return null

在函数式组件中,要想获取从父组件传递过来的属性,需要通过一个参数,props

```js
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return <div>你好,我叫{props.name},我今年{props.age}岁</div>
}

const user = {
  name: 'jack',
  age: 18
}

const App = () => {
  return {
    <div>
  		<Hello name='java' age='25' />
    	<Hello {...user} />
  		<Hello />
  	</div>
  }
}

ReactDOM.render(
  	<App />,
    document.getElementById('root')
)
```

# ES6 class的方法

```js
function Father(firstName) {
    this.firstName = firstName;
  }
  // 实例方法
  Father.prototype.getFirstName = function () {
    console.log(this.firstName);
  }
  // 静态方法
  Father.sayHello = function () {  
    console.log('我是father');
  }
  function Son(firstName) {  
    this.firstName = firstName;
  }
  
  let father = new Father('李');
  father.getFirstName();
  Father.sayHello();

  Son.prototype = father;
  let son = new Son('李2');
  son.getFirstName();
```

```js
class Father {
    constructor(firstName) {
      this.firstName = firstName;
    }

    getFirstName() {
      console.log(this.firstName);
    }

    static sayHello() {
      console.log('我是father');
    }
  }
  class Son extends Father {
    constructor(firstName) {
      super(firstName);
      console.log('son');
    }
  }

  let father = new Father('王');
  father.getFirstName();
  Father.sayHello();

  let son = new Son('王2');
  son.getFirstName();
```



# 用class方法创建组件

```js
// 1.要通过class创建组件,首先要引入Component这个类,以后创建的组件都需要继承这个类
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 通过class创建组件
class Hello extends Component {
  // 在这个类中,要有一个render函数,并且这个render函数要范湖一些内容
  render(){
    return(
      <div>hello world</div>
    )
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```















