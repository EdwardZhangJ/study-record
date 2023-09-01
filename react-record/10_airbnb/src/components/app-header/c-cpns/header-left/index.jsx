import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <div>
      <LeftWrapper>
        <div className='logo'>
          <IconLogo />
        </div>
      </LeftWrapper>
    </div>

  )
})

export default HeaderLeft
