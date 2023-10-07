import PropTypes from 'prop-types'
import React, { memo } from 'react'

import {TabsWrapper} from './style'

const SectionTabs = memo((props) => {
  const { tabNames } = props

  return (
    <TabsWrapper>SectionTabs</TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
