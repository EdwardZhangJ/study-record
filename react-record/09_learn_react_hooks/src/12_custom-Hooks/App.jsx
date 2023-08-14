import React, { memo, useEffect, useState } from 'react'
import { useLocalStorage } from './hooks'
import './style.css'

const App = memo(() => {

  // 通过key直接从localStorage中获取数据
  // const [token, setToken] = useState('edward')
  // useEffect(() => {
  //   localStorage.setItem('token', token)
  // },[token])
  const [token, setToken] = useLocalStorage('token')
  function setTokenHandle() {
    setToken('123456')
  }


  // const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem('avatarUrl'))
  // useEffect(() => {
  //   localStorage.setItem('avatarUrl', avatarUrl)
  // },[avatarUrl])
  const [avatarUrl, setAvatarUrl] = useLocalStorage('avatarUrl')
  function setAvatarUrlHandle() {
    setAvatarUrl('https://avatars.githubusercontent.com/u/25105555?v=4')
  }

  return (
    <div className='app'> 
      <h1>App Root Component</h1>
      <h2>Token: {token}</h2>
      <button onClick={setTokenHandle}>设置Token</button>

      <h2>Avatar: {avatarUrl}</h2>
      <button onClick={setAvatarUrlHandle}>设置Avatar</button>
    </div>
  )
})

export default App
