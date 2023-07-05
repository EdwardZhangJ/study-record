import React, { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      sections: [
        {title: 'section1', content: 'content1'},
        {title: 'section2', content: 'content2'},
        {title: 'section3', content: 'content3'},
        {title: 'section4', content: 'content4'},
      ]
    }
  }
  render() {
    const {sections} = this.state
    return (
      <>
        <h2>我是 App 的标题</h2>
        <p>我是 App 内容</p>
        <hr />
        {
          sections.map((section, index) => {
            return (
              <Fragment key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </Fragment>
            )
          })
        }
      </>
    )
  }
}

export default App
