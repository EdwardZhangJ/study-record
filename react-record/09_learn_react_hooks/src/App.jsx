import React, { PureComponent } from 'react'
class HelloWord extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello World'
    }
  }
  changeText() {
    this.setState({ message: '你好啊，李银河' })
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <h2>内容1： {message}</h2>
        <button onClick={e => this.changeText()}>修改内容</button>
      </div>
    )
  }
}

function HelloWorld2(props) {
  let message = 'Hello World'

  // 函数式组件存在的最大缺陷
  // 1. 组件不会被重新渲染: 修改message之后，组件不知道自己是否要重新渲染
  // 2. 如果页面会重新渲染,函数会被重新执行,第二次重新执行时,会重新给message赋值为hello world
  // 3. 类似于生命周期的回调函数，也是没有的

  return (
    <div>
      <h2>内容2： {message}</h2>
      <button onClick={e => message = '你好啊，李银河'}>修改内容</button>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWord />
        <HelloWorld2 />
      </div>
    )
  }
}

export default App
