
import React, { PureComponent } from 'react'

export class App extends PureComponent {

  constructor() {
    super()

    this.state = {
      username: "",
      password: "",
      isAgree: true,
      hobbies: [
        {value: 'sing', text: '唱', isChecked: false},
        {value: 'dance', text: '跳', isChecked: false},
        {value: 'rap', text: 'rap', isChecked: false},
      ],
    }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容")
    console.log(this.state.username, this.state.password)
    console.log('获取爱好', this.state.hobbies.filter(item => item.isChecked).map(item => item.text))

    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value })
  // }
  // handlePasswordChange(event) {
  //   this.setState({ password: event.target.value })
  // }

  // 优化: 通过一个函数来处理所有的输入框的变化
  handleInputChange (event) {
    const keyName = event.target.name
    this.setState({ [keyName]: event.target.value })
  }

  handleCheckChange(event) {
    console.log(event);
    this.setState({ isAgree: event.target.checked })
  }

  handleCheckboxChange(event, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({ hobbies })
  }
  
  render() {
    const { username, password, isAgree, hobbies } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <div>
            {/* 1.用户名和密码 */}
            <label htmlFor="username">
              用户: 
              <input 
                id='username' 
                type="text" 
                name='username' 
                value={username} 
                onChange={e => this.handleInputChange(e)}
              />
            </label>
            <label htmlFor="password">
              密码: 
              <input 
                id='password' 
                type="text" 
                name='password' 
                value={password} 
                onChange={e => this.handleInputChange(e)}
              />
            </label>
          </div>

          {/* 2. checkbox */}
          <label htmlFor="agree">
            <input 
              id="agree" 
              type="checkbox" 
              checked={isAgree} 
              onChange={e => this.handleCheckChange(e)}/> 同意协议
          </label>

          {/* 3. checkbox 多选 */}
          <div>
            您的爱好：
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.text}>
                    <input 
                      type="checkbox" 
                      id={item.value} 
                      checked={item.isChecked}
                      onChange={e => this.handleCheckboxChange(e, index)}/>{item.text}
                  </label>
                )
              })
            }
            {/* <label htmlFor="sing">
              <input type="checkbox" id="sing" />唱
            </label>
            <label htmlFor="jump">
              <input type="checkbox" id="jump" />跳
            </label>
            <label htmlFor="rap">
              <input type="checkbox" id="rap" />rap
            </label> */}
            <button type='submit'>注册</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
