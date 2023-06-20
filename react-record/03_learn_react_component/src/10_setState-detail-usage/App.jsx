import React, { Component } from 'react'
import {flushSync} from 'react-dom'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world!',
      counter: 0,
    }
  }

  changeText() {
    setTimeout(() => {
      // 在React18之前，setTimeout中的setState是同步的操作
      // 在React18之后，setTimeout中的setState是异步操作(批处理)
      flushSync(() => {

        this.setState({message: '你好啊，李银河！'})
      })
      console.log('-------------', this.state.message);
    }, 0);
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
