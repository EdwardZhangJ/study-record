import PropTypes from 'prop-types'
import React, { memo } from 'react'

import {SectionV1Wrapper} from './style'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>

    </SectionV1Wrapper>
  )
})
HomeSectionV1.prototype = {
  infoData: PropTypes.object
}

export default HomeSectionV1
