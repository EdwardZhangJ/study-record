import React, { Component } from 'react'
import Home from './Home'
import Recommend from './Recommend'

export class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // App 进行性能优化的点
    if(this.state.message !== nextState.message || this.state.counter !== nextState.counter) { 
      return true
    }
    return false
  }
  constructor() {
    super()

    this.state = {
      message: 'hello world!',
      counter: 0,
    }
  }
  changeText() {
    this.setState({ message: '你好啊，李银河！' })
    // this.setState({ message: 'hello world!' })
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }
  render() {
    const { message, counter } = this.state
    console.log('App render');
    return (
      <div>
        <h2>App-{message}-{counter}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e=>this.increment()}>counter + 1</button>
        <Home message={message}/>
        <Recommend counter={counter}/>
      </div>
    )
  }
}

export default App
