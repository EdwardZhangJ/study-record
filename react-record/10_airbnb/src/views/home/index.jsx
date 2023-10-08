import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header/index.jsx'
import HomeBanner from './c-cpns/home-banner'

import { HomeWrapper } from './style'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {

  /** 从redux中获取数据 */
   const { goodPriceInfo, highScoreInfo, discountInfo } =  useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
  }), shallowEqual)

  // 派发异步的事件，发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction)
  },[dispatch])
  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          {/* 折扣数据 */}
          <div className="discount">
            <SectionHeader title={discountInfo.title} subTitle={discountInfo.subtitle}></SectionHeader>

          </div>
          {/*  */}
          <SectionHeader title={goodPriceInfo.title} />
          
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
        
      </HomeWrapper>
    </div>
  )
})

export default Home
