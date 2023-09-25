import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        {/* 服务内容 */}
        <div className="service">
          {
            footerData?.map(item => {
              return (
                <div className='item' key={item.name}>
                  <div className="title">{item.name}</div>
                  <div className="list">
                    {
                      item?.list?.map(list => {
                        return <div className="href" key={list}>{list}</div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
          
        </div>
        {/* 版权声明 */}
        <div className='statement'>
          <div>© 2023 Airbnb, Inc. · 隐私 · 条款 · 网站地图</div>

          <div className='info'>京ICP备16017121号 · 京ICP证 160773号 · 京公网安备 11010502032345号 · 安彼迎网络（北京）有限公司 · 营业执照 · 全国旅游投诉渠道 12345</div>
        </div>


      </div>

    </FooterWrapper>
  )
})

export default AppFooter
