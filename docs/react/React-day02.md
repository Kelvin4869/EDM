# React-day02

## props

作用: props给组件传递数据,一般用在父子组件之间

注意: props是只读的,无法给props添加或修改属性

props.children: 获取组件的内容,比如:  `<Hello>组件内容</Hello>中的组件内容`

this.props.children指的是这个组件在使用的时候,它的innerHTML位置的内容

## 默认属性

给类(或者函数)绑定一个defaultProps属性

## 属性校验

`npm i prop-types -s`

```js
import PropTypes from 'prop-types';

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
```



## state

作用: 用来给组件提供 组件内部 使用的数据(相当于vue中的data是一样的)

注意:

- 只有通过class创建的组件才具有状态
- 状态是私有的,完全由组件来控制

```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  constructor(props) {
      // 注意,在给state赋值的时候,前面要记得加上super()函数,去调用父类Component中的构造函数
      super(props)
      this.state = {
          country: 'china'
      }
  }
  render(){
    return(
      <div>
      	<div>hello, {this.props.name}</div>
      	<div>{this.state.country}</div>
      </div>
    )
  }
}

class App extends Component {
  render(){
    return(
      <div>
      	<Hello name="neil"/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

- **唯一可以分配this.state的地方是构造函数**
- **不要直接修改state(状态), 类似于这样 this.state.comment= 'Hello', 用 setState() 代替: this.setState({comment: 'Hello'})**
- **this.setState()方法更新是异步的,此时需要给它传递第二个参数,即一个回调来在更新之后执行**

```js
class App extends Component {
  constructor(props) {
      // 注意,在给state赋值的时候,前面要记得加上super()函数,去调用父类Component中的构造函数
      super(props)
      this.state = {
          val: 'hello neil'
      }
      this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
      this.setState({
          val: 'hello world'
      })
      // this.setState()是异步的,所以这里的console.log()打印出来并不是想要的
      console.log(this.state.val)
  }
  render(){
    return(
      <div>
      	<button onClick={() => this.handleClick}>{this.state.val}</button>
      </div>
    )
  }
}
```

- **组件的state(状态)可以向下传递,作为其子组件的props(属性),通常称为一个"从上到下",或者"单向"的数据流**

## 函数式组件和类组件的区别

不同: 类允许我们在其中添加本地状态(state)和生命周期钩子

相同: 里面props是只读的, 无法修改

重点: 我们在开发的时候, 凡是没有state的组件, 就一定要使用函数式组件. 因为使用函数的方式创建的组件更易于测试和数据的维护. 也就是说, 只要我们的组件没有state, 我们就要使用函数式组件(也叫无状态组件)



## 案例:评论列表

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: [
        {user: '1', content: '我爱你'},
        {user: '2', content: '我爱你'},
        {user: '3', content: '我爱你'},
        {user: '4', content: '我爱你'},
        {user: '5', content: '我爱你'},
      ]
    }
  }
  createList = () => {
    return this.state.commentList.map((item, index) => {
      return(
        <div key={index}>
          <h3>{item.user}</h3>
          <p>{item.content}</p>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <h1>评论列表</h1>
        {this.createList()}
      </div>
    )
  }
}

export default App;
```

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class NumberList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      this.props.list.map((item, index) => {
        return(
          <Comment {...item} key={index} />
        )
      })
    )
  }
}

class Comment extends Component {
  render() {
    return(
      <div>
       <h3>{this.props.user}</h3>
       <p>{this.props.content}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: [
        {user: '1', content: '我爱你'},
        {user: '2', content: '我爱你'},
        {user: '3', content: '我爱你'},
        {user: '4', content: '我爱你'},
        {user: '5', content: '我爱你'},
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>评论列表</h1>
        <NumberList list={this.state.commentList}></NumberList>
      </div>
    )
  }
}

export default App;
```

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const NumberList = (props)=> {
  return props.list.map((item, index) => <Comment {...item} key={index} />)
}

const Comment = (props) => {
  return(
    <div>
      <h3>{props.user}</h3>
      <p>{props.content}</p>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: [
        {user: '1', content: '我爱你'},
        {user: '2', content: '我爱你'},
        {user: '3', content: '我爱你'},
        {user: '4', content: '我爱你'},
        {user: '5', content: '我爱你'},
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>评论列表</h1>
        <NumberList list={this.state.commentList}></NumberList>
      </div>
    )
  }
}

export default App;
```



## 事件处理

- React事件使用驼峰命名

- 通过JSX,传递一个函数作为事件处理程序

  ```js
  <button onClick={activateLasers}>
  	Activate Lasers    
  </button>
  ```

- 绑定this(类方法中没有绑定this)

  1.在构造函数中绑定(建议)

  ```js
  constructor(props) {
  	super(props);
  	this.state = {isToggleOn: true};
  	
  	// 这个绑定是必要的,使this在回调中起作用
  	this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      this.setState(prevState => {
          isToggleOn: !prevState.isToggleOn
      })
  }
  ```

  ```js
  import React, {Component} from 'react';
  import logo from './logo.svg';
  import './App.css';
  
  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'IT'
      }
      // 第一种事件绑定方式, 官方推荐
      this.changeName = this.changeName.bind(this)
    }
    changeName() {
      // 改变state不能像下面这样写,这是错误写法
      // this.state.name = 'IT123'
      console.log(this);
      this.setState({
        name: '543'
      })
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
          {/* 在React中监听事件都是使用驼峰命名法, 比如onClick, onKeyUp... */}
          <button onClick={this.changeName}>改变name</button>
  		{/* 第二种绑定方式 onClick={this.changeName.bind(this)*/}
  		{/* <button onClick={this.changeName.bind(this)}>改变name</button> */}
        </div>
      )
    }
  }
  
  export default App;
  ```

  

  2.使用箭头函数(属性初始化语法)

  ```js
  import React, {Component} from 'react';
  import logo from './logo.svg';
  import './App.css';
  
  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'IT'
      }
      // 第一种事件绑定方式, 官方推荐
      this.changeName = this.changeName.bind(this)
    }
    changeName = () => {
      console.log(this);
      this.setState({
        name: '543'
      })
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
          {/* 在React中监听事件都是使用驼峰命名法, 比如onClick, onKeyUp... */}
          <button onClick={this.changeName.bind(this)}>改变name</button>
          {/* <button onClick={this.changeName.bind(this)}>改变name</button> */}
        </div>
      )
    }
  }
  
  export default App;
  ```



- 将参数传递给事件处理程序

  ```js
  import React, {Component} from 'react';
  import logo from './logo.svg';
  import './App.css';
  
  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'IT'
      }
    }
    // 如果通过bind来获取事件对象的话,需要将这个事件对象参数写到函数参数的最后的位置
    changeName(myName, e) {
      console.log(e);
      this.setState({
        name: myName
      })
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
          {/* 在React中监听事件都是使用驼峰命名法, 比如onClick, onKeyUp... */}
          <button onClick={this.changeName.bind(this, '453')}>改变name</button>
        </div>
      )
    }
  }
  
  export default App;
  ```

  

## 事件参数及获取事件对象

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'IT'
    }
    // 第一种事件绑定方式, 官方推荐
    this.changeName = this.changeName.bind(this)
  }
  changeName = (e, myName) => {
    console.log(this);
    this.setState({
      name: myName
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* 在React中监听事件都是使用驼峰命名法, 比如onClick, onKeyUp... */}
		{/* 如果你要传递事件对象,就需要给箭头函数加一个参数 */}
        <button onClick={(e) => this.changeName(e, '543')}>改变name</button>
      </div>
    )
  }
}

export default App;
```



## setState异步处理方法

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'IT'
    }
  }
  // 如果通过bind来获取事件对象的话,需要将这个事件对象参数写到函数参数的最后的位置
  changeName(myName) {
    // this.setState({
    //   name: myName
    // })
    // this.setState是异步的,这里的打印只会打印state还未改变之前的值
    // console.log(this.state.name);

    // 要解决上面的问题,需要给this.setState()方法加上第二个参数,它就是一个回调函数,这个回调函数里面去执行相应的操作
    this.setState({
      name: myName
    }, () => {
      console.log(this.state.name);
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* 在React中监听事件都是使用驼峰命名法, 比如onClick, onKeyUp... */}
        <button onClick={this.changeName.bind(this, '453')}>改变name</button>
      </div>
    )
  }
}

export default App;
```



## 组件的生命周期

1.Mounting(装载)

​	当组件实例被创建并将其插入DOM时,这些方法将被调用

- constructor()

- componentWillMount()

- render()

  不要在render方法中调用setState()方法,,否则会递归渲染,因为状态改变会重新调用render(),render()又重新改变状态

- componentDidMount()

2.Updateing(更新)

​	改变props或state可以出发更新事件.在重新渲染组件时,这些方法将被调用

- componentWillReceiveProps(newProps)

- shouldComponentUpdate(newProps, newState)

  这个方法必须返回布尔值,根据布尔值决定是否重新渲染组件

- componentWillUpdate(nextProps, nextState)

- render()

- componentDidUpdate(prevProps, prevState)

3.UnMounting(卸载)

​	当一个组件从DOM中删除时,这个方法将被调用

- componentWillUmount()

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  }
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>increase</button>
        {
          this.state.data !==3
            ?<Content myNumber={this.state.data}></Content>
            :<div>Content组件销毁</div>
        }
      </div>
    )
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentWillReceiveProps(newProps) {
    console.log('component will recieve props')
  }

  shouldComponentUpdate(newProps, newState) {
    return true
  }
  
  componentWillUpdate(newProps, newState) {
    console.log('component will update')
  }

  componentDidUpdate(preProps, prevState) {
    console.log('component did update')
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    return(
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

export default App;
```



## 组件通讯

### 父组件向子组件通讯

通讯是单向的,数据必须是由一方传到另一方.在React中,父组件可以向子组件通过传props的方式,向子组件进行通讯

```js
class ChildOne extends Component {
  render() {
    return <p>{this.props.msg}</p>
  }
}

class Parent extends Component {
  constructor() {
    this.state = {
      val: 'hello world'
    }
  }

  render() {
    return (
      <div>
        <ChildOne msg={this.state.val}></ChildOne>
      </div>
    )
  }
}
```



### 子组件向父组件通讯

而子组件向父组件通讯, 同样也需要父组件向子组件传递props进行通讯, 只是父组件传递的, 是作用域为父组件自身的函数, 子组件调用该函数, 将子组件想要传递的信息, 作为参数,传递到父组件的作用域中

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Childone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我在学习'
    }
  }
  render() {
    // 想要实现组件传值给父组件,需要给子组件绑定一个props,这个props是一个函数,通过props这个里面的函数去调用父组件里面的方法,实现通信
    return <button onClick={() => this.props.getChildMsg(this.state.msg)}>点击告诉爸爸{this.state.msg}</button>
  }
}

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '???'
    }
  }
  // 定义接收函数,这个函数里面的参数,可以用来接收上传过来的值
  getMsg = (val) => {
    this.setState({
      msg: val
    })
  }
  render() {
    return(
      <div>
        <div>我儿子跟我说, {this.state.msg}</div>
        <Childone getChildMsg={this.getMsg}></Childone>
      </div>
    )
  }
}

export default Parent;
```





### 兄弟组件通讯

```js
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Childone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我在学习'
    }
  }
  render() {
    // 想要实现组件传值给父组件,需要给子组件绑定一个props,这个props是一个函数,通过props这个里面的函数去调用父组件里面的方法,实现通信
    return <button onClick={() => this.props.getChildMsg(this.state.msg)}>点击告诉爸爸{this.state.msg}</button>
  }
}

// 兄弟组件通信实际上是需要借助子组件向父组件通信,然后直接通过父组件的props传值给子组件
const Childtwo = (props) => {
  return <div>我兄弟给我说: {props.myBroMsg}</div>
}

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '???'
    }
  }
  // 定义接收函数,这个函数里面的参数,可以用来接收上传过来的值
  getMsg = (val) => {
    this.setState({
      msg: val
    })
  }
  render() {
    return(
      <div>
        <div>我儿子跟我说, {this.state.msg}</div>
        <Childone getChildMsg={this.getMsg}></Childone>
        <Childtwo myBroMsg={this.state.msg}></Childtwo>
      </div>
    )
  }
}

export default Parent;
```































