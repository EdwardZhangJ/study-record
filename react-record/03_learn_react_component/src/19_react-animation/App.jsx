import React, { PureComponent } from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={() => this.setState({isShow: !isShow})}>
            切换
        </button>
        {/* {isShow && <h2>呵呵呵</h2>} */}
        <CSSTransition in={isShow} unmountOnExit={true} classNames="why" timeout={2000}>
          <h2>哈哈哈</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App
