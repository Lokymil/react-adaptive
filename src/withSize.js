import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveWrapper from './ResponsiveWrapper'

export const withSize = (Component, wrapperClassName) => props => (
  <ResponsiveWrapper className={wrapperClassName}>{size => <Component size={size} {...props} />}</ResponsiveWrapper>
)

export const withSizePropTypes = {
  size: PropTypes.shape({ width: PropTypes.number })
}
