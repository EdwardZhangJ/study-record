import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world!',
      counter: 0,
    }
  }

  changeText() {
    // 1. setState 更多用法
    // 1.1 基本使用
    // this.setState({ message: '你好啊，李银河！' })

    // 1.2 setState 可以传入回调函数
    // 好处一：可以在回调函数中编写新的state的逻辑
    // 好处二：当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //   // - 编写一些对新的state处理逻辑
    //   // - 可以获取之前的state和props值
    //   console.log(state, props)
    //   return {
    //     message: '你好啊，李银河！',
    //   }
    // })

    // 3. setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后（数据合并）,获取到对应的结果执行一些逻辑代码
    // 那么可以在setState中传入第二个参数:callback
    this.setState({ message: '你好啊，李银河！'} ,() => {
      console.log('++++++++++++++', this.state.message)
    })
    console.log('-------------', this.state.message)
  }
  
  increment() {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      }
    })
  }

  render() {
    const { message, counter } = this.state
    console.log('render被执行')
    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>

        <h2>计数： {counter}</h2>
        <button onClick={e => this.increment()}> +1 </button>
      </div>
      
    )
  }
}

export default App
