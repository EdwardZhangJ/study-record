
import React, { memo } from 'react'
import { RightWrapper } from './style'

import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  return (
    <div>
      <RightWrapper>
        <div className="btns">
          <span>登录</span>
          <span>注册</span>
          <span>
            <IconGlobal />
            </span>
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
