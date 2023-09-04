import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {


  return (
    <div>
      <CenterWrapper>
        <button className='dir'>
          <div className='dir-text'>城市</div>
        </button>
        <span className='split-line'></span>
        
        <button className='dir'>
          <div className='dir-text'>入住退房日期</div>
        </button>
        <span className='split-line'></span>

        <button className='dir'>
          <div className='dir-text'>关键词</div>
          <div className="search-bar">
            <IconSearchBar />
          </div>
        </button>
      </CenterWrapper>
    </div>
  )
})

export default HeaderCenter
