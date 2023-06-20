import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      age: 0,
      height: 0 
    }
  }
  componentDidMount() {
    eventBus.on('bannerPrev', (name, age, height) => this.bannerPrevClick(name, age, height))
    eventBus.on('bannerNext', (e) => this.bannerNextClick(e))
  }
  bannerPrevClick(name, age, height) {
    console.log('App组件收到了bannerPrev的消息', name, age, height)
    this.setState({name, age, height})
  }
  bannerNextClick(e) {
    console.log('App组件收到了bannerNext的消息', e)
  }
  componentWillUnmount() {
    eventBus.off('bannerPrev', this.bannerPrevClick)
  }
  render() {
    const { name, age, height } = this.state
    return (
      <div>
        <h2>App Component: {name + '-' + age + '-' + height }</h2>
        <Home />
      </div>
    )
  }
}

export default App
