import React, { PureComponent, createRef } from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
    this.sectionRef = createRef()
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={() => this.setState({isShow: !isShow})}>
            切换
        </button>
        {/* {isShow && <h2>呵呵呵</h2>} */}
        <CSSTransition 
          nodeRef={this.sectionRef}
          in={isShow} 
          unmountOnExit={true} 
          classNames="why" 
          timeout={2000} 
          appear={true}
          onEnter={e => console.log('开始进入动画')}
          onEntering={e => console.log('正在进入动画')}
          onEntered={e => console.log('进入动画完成')}
          onExit={e => console.log('开始退出动画')}
          onExiting={e => console.log('正在退出动画')}
          onExited={e => console.log('退出动画完成')}
          >
          <div className='section' ref={this.sectionRef}>
            <h2>哈哈哈</h2>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default App
