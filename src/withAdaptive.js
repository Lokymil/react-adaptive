import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'

const withAdaptive = ({ mapSizeToComponent }) => props => {
  return <ResponsiveWrapper>{size => mapSizeToComponent(size)(props)}</ResponsiveWrapper>
}

export default withAdaptive
