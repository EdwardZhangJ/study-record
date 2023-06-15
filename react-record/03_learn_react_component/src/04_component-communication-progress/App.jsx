import React, { Component } from 'react'
import AddCounter from './child-to-parent/AddCounter'
import SubCounter from './child-to-parent/SubCounter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 100
    }
  }
  changeCounter(e) {
    this.setState({
      counter: e + this.state.counter
    })
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>当前计数： {counter}</h2>
        <AddCounter addClick={(e)=> {this.changeCounter(e)}}/>
        <SubCounter subCount={(e)=> {this.changeCounter(e)}}/>
      </div>
    )
  }
}

export default App
