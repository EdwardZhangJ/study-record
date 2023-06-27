import React, { PureComponent } from 'react'

function hoc(WrapperComponent) {
  // 1. 定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <WrapperComponent />
    }
  }
  return NewCpn

  // 2. 定义函数组件
  // function NewCpn2(props) {
    
  // }
  // return NewCpn2
}

class HelloWord extends PureComponent {
  render() {
    return (
      <h2>HelloWord</h2>
    )
  }
}

const HelloWordHoc = hoc(HelloWord)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <HelloWordHoc />
      </div>
    )
  }
}
