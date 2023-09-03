
import React, { memo } from 'react'
import { RightWrapper } from './style'

import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  return (
    <div>
      <RightWrapper>
        <div className="btn-icon">
          {/* 新版样式变更 只有切换语言图标*/}
            <IconGlobal />

          {/* <span className='btn'>登录</span>
          <span className='btn'>注册</span> */}

          {/* <span className='btn'></span> */}
        </div>

        <div className="profile">
          <IconMenu />
          <IconAvatar/>
        </div>


      </RightWrapper>
    </div>
  )
})

export default HeaderRight
