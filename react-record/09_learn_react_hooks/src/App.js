import React, { PureComponent } from 'react'

class HelloWord extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return <div>Hello World</div>
  }
}

export class App extends PureComponent {
  render() {
    return (
      <div>App</div>
    )
  }
}

export default App
