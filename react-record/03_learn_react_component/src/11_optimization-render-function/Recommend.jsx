import React, { Component } from 'react'

export class Recommend extends Component {
  shouldComponentUpdate(nextProps) {
    if(this.props.counter !== nextProps.counter) { return true}
    return false
  }
  render() {
    console.log('Recommend render');

    return (
      <div>
        <h2>Recommend Page - {this.props.counter}</h2>
      </div>
    )
  }
}

export default Recommend
