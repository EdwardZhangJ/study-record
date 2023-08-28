import React, { memo, useEffect, useState } from 'react'
import edRequest from '@/services'
import AppHeader from 'components/app-header'

const Home = memo(() => {

  // 定义状态
  const [highScore, setHighScore] = useState({})

  // 网络请求
  useEffect(() => {
    edRequest.get({url: '/home/highscore'}).then(res => {
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <AppHeader />
    </div>
  )
})

export default Home
