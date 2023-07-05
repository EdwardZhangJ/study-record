import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {
          createPortal(<h2>App H2</h2>, document.querySelector('#why'))
        }
        {/* 2. Modal 组件 */}
        <Modal>
          <p>Modal 组件 p元素</p>
          <div>Modal 组件 div元素</div>
        </Modal>
      </div>
    )
  }
}

export default App
