# React-day03

## 受控表单和非受控表单

受控表单:设定了value值的input表单就是一个受控表单,此时的表单是不受你控制的,受react控制

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  handleChange = (e) => {
    this.setState({
      msg: e.target.value
    })
  }
  render() {
    return(
      <div>
        {/* 
          在react中,只要给表单元素加了value之后,这个input框就不再受你的控制,只能受react控制
          要想改变这个input框中的value值,只能借助onChange函数
        */}
        <input type="text" value={this.state.msg} onChange={this.UNSAFE_componentWillMount.handleChange} />
      </div>
    )
  }
}

export default App;
```



不受控表单(不推荐使用): value没有值的input是一个不受控组件.用户的任何输入都会反映到输入框中.默认值设置: `<input type="checkbox">`和`<input type="radio">` 支持defaultChecked,而`<select>`和`<textarea>`支持defaultValue(它仅会被渲染一次,在后续的渲染时并不起作用),要获取非受控表单的值,需要借助于ref



## refs

### 使用refs的场景

- 处理focus,文本选择或者媒体播放

- 触发强制动画

- 集成第三方DOM库

  注意: **尽量少用refs**

### DOM元素上使用refs

通过回调函数来实现对dom的引用

定义: ref = {(input) => {this.textInput = input;}}

使用: this.textInput.focus()

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  handleChange = (e) => {
    this.setState({
      msg: e.target.value
    })
  }
  componentDidMount() {
    this.inputRef.focus();
  }
  render() {
    return(
      <div>
        {/* 
          在react中,只要给表单元素加了value之后,这个input框就不再受你的控制,只能受react控制
          要想改变这个input框中的value值,只能借助onChange函数
        */}
        <input type="text" value={this.state.msg} onChange={this.handleChange} />
        {/* 如果input没有加value,这个表单就是非受控表单,用户输入什么,就展示什么 */}
        <input type="text" ref={(elementInput) => {this.inputRef = elementInput}}/>
      </div>
    )
  }
}

export default App;
```



## Todo案例

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {id: 22, text: 'react'}
      ]
    }
  }
  handleDel = (id) => {
    console.log(id, '父组件中');
    // 直接通过数组的findIndex方法找数组的索引,我们这里的条件是,只要数组项中的id和传入的id相等,我就把那一项的索引取出来,保存在idx中
    let idx = this.state.todoList.findIndex(item => item.id === id)
    // 直接怼数组进行删除操作
    let tempArr = this.state.todoList
    tempArr.splice(idx, 1)
    this.setState({
      todoList: tempArr
    })
  }
  getInput = (val) => {
    console.log(val)
    let id = this.state.todoList.length === 0 ? 0 : this.state.todoList[this.state.todoList.length - 1].id + 1
    this.setState({
      todoList: this.state.todoList.concat({id: id, text: val})
    })
  }
  render() {
    return(
      <div>
        {/* 这个input也要封装成组件形式 */}
        <Input onSubmit={this.getInput}></Input>
        {
          this.state.todoList.map((item) => {
            // return <Todo id={0}, text='react'/>
            return <Todo {...item} key={item.id} onDel={this.handleDel}/>
          })
        }
      </div>
    )
  }
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ''
    }
  }
  getInputVal = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }
  emitVal = (e) => {
    // 如果按的是回车键,那么就开始将数据传给父亲,再讲input置空
    if (e.keyCode === 13) { 
      this.props.onSubmit(this.state.inputVal)
      this.setState({
        inputVal: ''
      })
    }
  }
  render() {
    return(
      <div>
        <input type="text" value={this.state.inputVal} onChange={this.getInputVal} onKeyUp={this.emitVal}></input>
      </div>
    )
  }
}

class Todo extends Component {
  delTodo = (id) => {
    console.log(id);
    this.props.onDel(id)
  }
  render() {
    return(
      <div>
        <div>
          {this.props.text}
          <span style={{paddingLeft: '44px',color:'red'}} onClick={(id) => this.delTodo(this.props.id)}>X</span>
        </div>
      </div>
    )
  }
}

export default App;
```



## React-router

### 路由的基本使用(BrowserRouter, HashRouter, Route&Link)

`yarn add react-router-dom` 或者 `npm i react-router-dom -s`

路由组件无法接受两个以上子元素

只想匹配某个路由, 加exact参数, 表示要求路径与location.pathname必须完全匹配

使用 `<Switch>` 组件来包裹一组 `<Route>` . `Switch` 会遍历自身的子元素(即路由) 并对第一个匹配当前路径的元素进行渲染, 后面的不会再渲染

HashRouter: `http://localhost:8000/#/abc/def`

BrowserRouter: `http://localhost:8000/abc/def`

如果有服务器端的动态支持, 建议使用 `BrowserRouter`, 否则建议使用 `HashRouter`

原因在于, 如果是单纯的静态文件, 假如路径从 / 切换到 /a 后,此时刷新页面, 页面将无法正常访问

二者的替换方法很简单, 我们在引入 react-router-dom时, 如以下:

```js
import { BrowserRouter as Router } from 'react-router-dom'
```

### 路由参数

参数获取: `this.props.match.params.xxx`

### Switch, Redirect

```js
import {Redirect} from 'react-router-dom'

<Redirect to="/404">

// 编程式导航: this.props.history.push('/xxx/')
```

```js
import React, {Component} from 'react';
import './App.css';
// 1.要引入react-router-dom中的BrowserRouter或者HashRouter
import {HashRouter, Route, Link} from 'react-router-dom';

const Index = (props) => {
  return (
    <div>我是首页{props.name}</div>
  )
}

const Product = (props) => {
  return (
    <div>我是商品详情页</div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMini: true
    }
  }
  render() {
    return(
      // 2. 将下面所有的东西用HashRouter(或者BrowserRouter) 包裹起来
      <HashRouter>
        <div>
          <ul>
            {/* 
              4.引入Link组件, 来做点击的跳转
              它里面也有to属性,这个to属性就表示你要跳转到的路径
            */}
            <li><Link to="/index">首页</Link></li>
            <li><Link to="/product">蔬菜</Link></li>
            <li><Link to="/product">水果</Link></li>
          </ul>
          {/* 
            3. 配置路由规则, 通过引入Route组件来配置路由规则
              它里面有path属性, 表示路径, 对于该路径匹配到的组件有两种写法
              第一种: 直接通过component属性来写, 注意这种写法不能穿props
              第二种: 通过render函数来写(推荐写法)
          */}
          {/* <Route path="/index" component={Index}/> */}
          <Route path="/index" render={() => <Index name="我是传进来的属性"/>} />
          <Route path="/product" render={() => <Product />} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
```

```js
import React, {Component} from 'react';
import './App.css';
// 1.要引入react-router-dom中的BrowserRouter或者HashRouter
import {HashRouter, Route, Link} from 'react-router-dom';

const Index = (props) => {
  return (
    <div>我是首页{props.name}</div>
  )
}

// const Product = (props) => {
//   return (
//     <div>我是商品详情页,我的商品编号是</div>
//   )
// }

class Product extends Component {
  componentDidMount() {
    // 传递进来的路由的属性有: history, location, match
    console.log(this.props);
  }
  render() {
    return(
      // 获取路由参数通过this.props.match.params.参数名获取
      <div>我是商品,我的商品编号是{this.props.match.params.id}</div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMini: true
    }
  }
  render() {
    return(
      // 2. 将下面所有的东西用HashRouter(或者BrowserRouter) 包裹起来
      <HashRouter>
        <div>
          <ul>
            {/* 
              4.引入Link组件, 来做点击的跳转
              它里面也有to属性,这个to属性就表示你要跳转到的路径
            */}
            <li><Link to="/index">首页</Link></li>
            <li><Link to="/product/22">蔬菜</Link></li>
            <li><Link to="/product/33">水果</Link></li>
          </ul>
          {/* 
            3. 配置路由规则, 通过引入Route组件来配置路由规则
              它里面有path属性, 表示路径, 对于该路径匹配到的组件有两种写法
              第一种: 直接通过component属性来写, 注意这种写法不能穿props
              第二种: 通过render函数来写(推荐写法)
          */}
          {/* <Route path="/index" component={Index}/> */}
          <Route path="/index" render={() => <Index name="我是传进来的属性"/>} />
          {/* 
          定义参数: /:参数 
          传递路由对象的所有属性需要在render函数中, 通过一个参数传递, 并且使用对象展开运算符将它展开
          */}
          <Route path="/product/:id" render={(props) => <Product {...props}/>} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
```

```js
import React, {Component} from 'react';
import './App.css';
// 1.要引入react-router-dom中的BrowserRouter或者HashRouter
import {HashRouter, Route, Link, Redirect, Switch} from 'react-router-dom';

const Index = (props) => {
  return (
    <div>我是首页{props.name}</div>
  )
}

// const Product = (props) => {
//   return (
//     <div>我是商品详情页,我的商品编号是</div>
//   )
// }

class Product extends Component {
  componentDidMount() {
    // 传递进来的路由的属性有: history, location, match
    console.log(this.props);
  }
  jumpTo = () => {
    // 要通过js实现跳转, 需要写this.props.history.push()
    this.props.history.push(`/product/${this.props.match.params.id}/buy`)
  }
  render() {
    return(
      // 获取路由参数通过this.props.match.params.参数名获取
      <div>
        我是商品,我的商品编号是{this.props.match.params.id}
        <button onClick={this.jumpTo}>选购</button>
        <Route path="/product/:id/buy" render={() => <div>我们啥都卖</div>} />
      </div>
    )
  }
}

const NotFound = () => {
  return <div>opps 没有找到组件</div>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMini: true
    }
  }
  render() {
    return(
      // 2. 将下面所有的东西用HashRouter(或者BrowserRouter) 包裹起来
      <HashRouter>
        <div>
          <ul>
            {/* 
              4.引入Link组件, 来做点击的跳转
              它里面也有to属性,这个to属性就表示你要跳转到的路径
            */}
            <li><Link to="/">首页</Link></li>
            <li><Link to="/product/22">蔬菜</Link></li>
            <li><Link to="/product/33">水果</Link></li>
          </ul>
          {/* 
          Switch和我们js当中的switch语句有点像, 表示匹配到一个路由规则之后就不会继续往下找路由规则
          记住凡是有多个Route的时候, 就加上Switch谨防出错
          */}
          <Switch>
            {/* 
              3. 配置路由规则, 通过引入Route组件来配置路由规则
                它里面有path属性, 表示路径, 对于该路径匹配到的组件有两种写法
                第一种: 直接通过component属性来写, 注意这种写法不能穿props
                第二种: 通过render函数来写(推荐写法)
            */}
            {/* <Route path="/index" component={Index}/> */}
            {/* exact表示精确匹配到路由组件 */}
            <Route path="/" exact render={() => <Index name="我是传进来的属性"/>} />
            {/* 
            定义参数: /:参数 
            传递路由对象的所有属性需要在render函数中, 通过一个参数传递, 并且使用对象展开运算符将它展开
            */}
            <Route path="/product/:id" render={(props) => <Product {...props}/>} />

            <Route path='/404' render={() => <NotFound />} />
            {/* 这是解决未匹配到路由的第一种方式 */}
            {/* <Route component={NotFound} /> */}
            {/* 第二种解决未匹配到路由使用Redirect组件 */}
            <Redirect to="/404" />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
```

