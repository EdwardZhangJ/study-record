import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'
import Profile from './Profile'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      info:{
        name: 'kobe',
        age: 30
      },
      theme: {
        color: 'red'
      }
    }
  }
  render() {
    const {info, theme} = this.state
    return (
      <div>
        <h2>App</h2>
        {/* 1. 给 Home 传递数据 */}
        {/* <Home name={'kobe'} age={18}/>
        <Home name={info.name} age={info.age}/>
        <Home {...info}/> */}

        {/* 2. 使用 Context 传递数据 */}
        {/* 第二步操作：使用Context对象中的 Provider 为后台提供数据 */}
        <UserContext.Provider value={info}>
          <ThemeContext.Provider value={theme}>
            <Home {...info}/>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
