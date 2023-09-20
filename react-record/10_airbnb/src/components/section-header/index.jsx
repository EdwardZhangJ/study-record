import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {HeaderWrapper} from './style'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props
  return (
    <HeaderWrapper> 
      <h2 className="title">{title}</h2>
      {subTitle && <h2 className="sub-title">{subTitle}</h2>}
    </HeaderWrapper>
  )
})

PropTypes.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default SectionHeader
