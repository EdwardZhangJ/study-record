import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isBBB: true,
      isCCC: false,
    }
  }
  render() {
    const { isBBB, isCCC } = this.state
    const classList = ['aaa']
    if (isBBB) classList.push('bbb')
    if(isCCC) classList.push('ccc')
    const classNamesList = classList.join(' ')

    return (
      <div>
        <h2 className={classNamesList}>哈哈哈</h2>
        <h2 className={`aaa ${isBBB ? 'bbb': ''} ${isCCC ? 'ccc':''}`}>哈哈哈</h2>
      </div>
    )
  }
}

export default App
