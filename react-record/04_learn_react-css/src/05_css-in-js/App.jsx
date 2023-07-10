import React, { PureComponent } from 'react'
import Home from './home'
import {AppWrapper, SectionWrapper} from './style'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      size: 30,
      color: ''
    }
  }
  changeColor() {
    this.setState({color: 'skyblue'})
  }
  render() {
    const {size, color} = this.state
    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <h2 className="title">我是标题</h2>
          <p className="content">我是内容</p>
          <button onClick={e => this.changeColor()}>修改颜色</button>
        </SectionWrapper>

        <Home/>

        <div className="footer" >
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    )
  }
}

export default App
