import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor() {
    super()
    console.log('Home constructor');
  }
  render() {
    console.log('Home render');
    return (
        <div>Home</div>
    )
  }
}

export default Home
