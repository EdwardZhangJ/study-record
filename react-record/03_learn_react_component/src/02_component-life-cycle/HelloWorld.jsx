import React, { Component } from 'react'

export class HelloWorld extends Component {
  // 1. 构造方法
  constructor() {
    super()
    this.state = {
      message: 'HelloWorld'
    }
    console.log('constructor');
  }

  changeText() {
    this.setState({
      message: '你好啊，李银河！'
    })
  }

  // 2. 执行render方法
  render() {
    console.log('render');
    const {message} = this.state
    return (
      <div>
        <div>{message}</div>
        <button onClick={()=> this.changeText()}>修改文本</button>
      </div>

    )
  }

  // 3. 组件被渲染到DOM： 被挂载到 componentDidMount
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 4. 组件被更新： 被挂载到 componentDidUpdate
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  // 5. 组件被卸载： 被挂载到 componentWillUnmount
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
}

export default HelloWorld
