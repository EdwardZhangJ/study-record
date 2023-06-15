import React, { Component } from 'react'

export class SubCounter extends Component {
  subCount(e) {
    this.props.subCount(e)
  }
  render() {
    return (
      <div>
        <button onClick={e=> this.subCount(-1)}>-1</button>
        <button onClick={e=> this.subCount(-5)}>-5</button>
        <button onClick={e=> this.subCount(-10)}>-10</button>
      </div>
    )
  }
}

export default SubCounter
