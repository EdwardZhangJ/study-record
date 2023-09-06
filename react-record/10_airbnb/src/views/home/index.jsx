import React, { memo, useEffect } from 'react'
import edRequest from '@/services'
import AppHeader from 'components/app-header'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {

  // 定义状态

  // 网络请求
  useEffect(() => {
    edRequest.get({url: '/home/highscore'}).then(res => {
      // setHighScore(res)
    })
  }, [])

  return (
    <div>
      {/* 头部 header */}
      <AppHeader />

      <HomeWrapper>
        <HomeBanner />
      </HomeWrapper>
    </div>
  )
})

export default Home
