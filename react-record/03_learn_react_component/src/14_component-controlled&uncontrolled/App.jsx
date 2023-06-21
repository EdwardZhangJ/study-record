import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor( ) {
    super()
    this.state = {
      username: 'coderwhy'
    }
  }
  changeInput(event) {
    this.setState({ username: event.target.value })
  }
  render() {
    const { username } = this.state
    return (
      <div>
        {/* 受控组件 */}
        <input value={username} type="text" onChange={e => this.changeInput(e)} />
        {/* 非受控组件 */}
        <input type="text" />
        <h2>userName: {username}</h2>
      </div>
    )
  }
}
