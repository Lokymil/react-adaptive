import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'

const withAdaptive = ({ mapSizeToComponent, wrapperClassName }) => props => {
  return <ResponsiveWrapper className={wrapperClassName}>{size => mapSizeToComponent(size)(props)}</ResponsiveWrapper>
}

export default withAdaptive
