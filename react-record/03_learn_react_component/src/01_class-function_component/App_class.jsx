import { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'App Component'
    }
  }
  render() {
    // const {message} = this.state
    // 1. react元素：通过jsx编写的代码机会被编译成React.createElement()，所以返回的就是一个React元素
    // return <h2>{message}</h2>

    // 2. 组件或者 fragment：返回的是一个组件或者是一个fragment
    // return ['abc', 'cba', 'nba']
    // return [
    //   <h1>h1元素</h1>,
    //   <h2>h2元素</h2>,
    //   <div>哈哈哈</div>,
    // ]
    // 3. 字符串/数字：返回的是字符串或者数字
    // return '123'
    return 1111
  }
}

export default App
