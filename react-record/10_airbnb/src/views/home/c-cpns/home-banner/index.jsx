import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {BannerWrapper} from './style'
import { fetchHomeDataAction } from '@/store/modules/home'


const HomeBanner = memo(() => {
  /** 派发异步事件：发送网络请求 */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  
  return (
    <BannerWrapper>
      <div className="content">
        content
      </div>
    </BannerWrapper>
  )
})

export default HomeBanner
