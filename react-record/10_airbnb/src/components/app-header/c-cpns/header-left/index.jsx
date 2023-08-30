import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <div>
      <LeftWrapper>
        <IconLogo />
      </LeftWrapper>
    </div>

  )
})

export default HeaderLeft
