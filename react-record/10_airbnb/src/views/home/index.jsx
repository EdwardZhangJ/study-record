import React, { memo } from 'react'
import HomeBanner from './c-cpns/home-banner'

import { HomeWrapper } from './style'

const Home = memo(() => {
  // 发起网络请求
  
  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          content
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home
