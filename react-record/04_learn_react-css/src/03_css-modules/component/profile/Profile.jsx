import React, { PureComponent } from 'react'

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是 Profile 组件标题</h2>
        <p className="content">我是 Profile 组件内容</p>
      </div>
    )
  }
}

export default Profile
