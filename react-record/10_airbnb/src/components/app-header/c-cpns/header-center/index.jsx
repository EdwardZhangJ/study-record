import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <div>
      <CenterWrapper>
        <IconSearchBar />
      </CenterWrapper>
    </div>
  )
})

export default HeaderCenter
