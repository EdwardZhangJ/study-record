
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  
  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.addEventListener('click', windowHandleClick, true)
    }
  }, [])
  /** 事件处理函数 */
  function profileClickHandle() {
    setShowPanel(true)
  }
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
        <div className="profile" onClick={profileClickHandle}>
          <IconMenu />
          <IconAvatar/>
          { showPanel && (
              <div className='popup-panel'>
                <div className="top">
                  <div className="item register">注册</div>
                  <div className="item login">登录</div>
                </div>
                <div className="bottom">
                  <div className="item help-center">帮助中心</div>
                </div>
              </div>
            )}
        </div>
      </RightWrapper>
    </div>
  )
})

export default HeaderRight
