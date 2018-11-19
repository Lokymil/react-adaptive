import React from 'react'
import { withBreakpoints, breakpoints } from 'react-adaptive';

const Small = ({ className })  => <div className={className}>I am small</div>
const Medium = ({ className })  => <div className={className}>I am medium</div>
const Large = ({ className })  => <div className={className}>I am large</div>
const XLarge = ({ className })  => <div className={className}>I am extra large !</div>

const components = {
  [breakpoints.small]: Small,
  [breakpoints.medium]: Medium,
  [breakpoints.large]: Large,
}

const breakPoints = {
  [breakpoints.small]: 500,
  [breakpoints.medium]: 700,
  [breakpoints.large]: 900,
}

export default withBreakpoints(breakPoints)({ components, defaultComponent: XLarge })