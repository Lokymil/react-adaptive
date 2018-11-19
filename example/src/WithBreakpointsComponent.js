import React from 'react'
import { withBreakpoints, breakpoints } from 'react-adaptive'

const XSmall = ({ className })  => <div className={className}>I am extra small !</div>
const Small = ({ className })  => <div className={className}>I am small</div>
const MediumSmall = ({ className })  => <div className={className}>I am medium small</div>
const Medium = ({ className })  => <div className={className}>I am medium</div>
const MediumLarge = ({ className })  => <div className={className}>I am medium large</div>
const Large = ({ className })  => <div className={className}>I am large</div>
const XLarge = ({ className })  => <div className={className}>I am extra large !</div>

const components = {
  [breakpoints.xSmall]: XSmall,
  [breakpoints.small]: Small,
  [breakpoints.mediumSmall]: MediumSmall,
  [breakpoints.medium]: Medium,
  [breakpoints.mediumLarge]: MediumLarge,
  [breakpoints.large]: Large,
  [breakpoints.XLarge]: XLarge,
}

const breakPoints = {
  [breakpoints.xSmall]: 400,
  [breakpoints.small]: 500,
  [breakpoints.mediumSmall]: 600,
  [breakpoints.medium]: 700,
  [breakpoints.mediumLarge]: 800,
  [breakpoints.large]: 900,
  [breakpoints.XLarge]: 1000,
}

export default withBreakpoints(breakPoints)({ components, defaultComponent: XLarge })