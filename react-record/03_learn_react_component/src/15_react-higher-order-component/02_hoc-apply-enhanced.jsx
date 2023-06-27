import React, { PureComponent } from 'react'
import {enhancedUseInfo} from './hoc/enhanced_props'

const Home = enhancedUseInfo(function(props) {
  return <h2>Home: {props.name} - {props.level}</h2>
})

const Profile = enhancedUseInfo(function (props) {
  return <h2>Profile: {props.name} - {props.level}</h2>
})

const HelloFriend = enhancedUseInfo(function (props) {
  return <h2>HelloFriend: {props.name} - {props.level}</h2>
})



export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={['轮播1', '轮播2', '轮播3']}/>
        <Profile />
        <HelloFriend />
      </div>
    )
  }
}

export default App
