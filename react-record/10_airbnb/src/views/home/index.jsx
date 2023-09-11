import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import edRequest from '@/services'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

const Home = memo(() => {

  // 定义状态
  const dispatch = useDispatch()

  // 网络请求
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'))
    // edRequest.get({url: '/home/highscore'}).then(res => {
    //   // setHighScore(res)
    // })
  }, [])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
      </HomeWrapper>
    </div>
  )
})

export default Home
