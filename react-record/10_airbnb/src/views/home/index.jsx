import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

const Home = memo(() => {
  // 从redux中获取数据
   const {goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

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
