import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      friend: []
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // 对比state是否发生改变：this.state.friend !== nextState.friend
  //   if(this.state.friend !== nextState.friend) { return true}
  //   if(this.props.message !== nextProps.message) { return true}
  //   return false
  // }
  render() {
    console.log('Home render');
    return (
      <div>
        <h2>Home Page - {this.props.message}</h2>
      </div>
    )
  }
}

export default Home
