import React, { PureComponent, createRef } from 'react'

class HelloWorld extends PureComponent{
  test() {
    console.log('test -------');
  }
  render(){
    return (
      <div>
        <h2 ref="why">Hello World</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  constructor() {
    super();
    this.hwRef = createRef();
  }
  getComponent() {
    console.log(this.hwRef.current)
    this.hwRef.current.test();
  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef}/>
        <button onClick={e => this.getComponent()}>获取DOM</button>
      </div>
    )
  }
}
