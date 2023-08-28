import React, { memo, useEffect, useState } from 'react'
import edRequest from '@/services'

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
      <h2>{highScore.title}</h2>
      <h4>{highScore.subTitle}</h4>
      <ul>
        {
          highScore.list && highScore.list.map((item, index) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home
