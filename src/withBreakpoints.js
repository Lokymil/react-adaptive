import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'

const breakpoints = {
  xSmall: 'XSmall',
  small: 'Small',
  mediumSmall: 'MediumSmall',
  medium: 'Medium',
  mediumLarge: 'MediumLarge',
  large: 'Large',
  xLarge: 'XLarge'
}

const withBreakpoints = componentBreakPoints => ({ components, defaultComponent }) => props => {
  const getSizedElement = size => {
    let DisplayedComponent = defaultComponent || null

    if (componentBreakPoints[breakpoints.xSmall] && componentBreakPoints[breakpoints.xSmall] >= size.width) {
      DisplayedComponent = components[breakpoints.xSmall]
      return <DisplayedComponent {...props} />
    }

    if (componentBreakPoints[breakpoints.small] && componentBreakPoints[breakpoints.small] >= size.width) {
      DisplayedComponent = components[breakpoints.small]
      return <DisplayedComponent {...props} />
    }

    if (componentBreakPoints[breakpoints.mediumSmall] && componentBreakPoints[breakpoints.mediumSmall] >= size.width) {
      DisplayedComponent = components[breakpoints.mediumSmall]
      return <DisplayedComponent {...props} />
    }

    if (componentBreakPoints[breakpoints.medium] && componentBreakPoints[breakpoints.medium] >= size.width) {
      DisplayedComponent = components[breakpoints.medium]
      return <DisplayedComponent {...props} />
    }

    if (componentBreakPoints[breakpoints.mediumLarge] && componentBreakPoints[breakpoints.mediumLarge] >= size.width) {
      DisplayedComponent = components[breakpoints.mediumLarge]
      return <DisplayedComponent {...props} />
    }

    if (componentBreakPoints[breakpoints.large] && componentBreakPoints[breakpoints.large] >= size.width) {
      DisplayedComponent = components[breakpoints.large]
      return <DisplayedComponent {...props} />
    }

    if (componentBreakPoints[breakpoints.xLarge] && componentBreakPoints[breakpoints.xLarge] >= size.width) {
      DisplayedComponent = components[breakpoints.xLarge]
      return <DisplayedComponent {...props} />
    }

    return <DisplayedComponent {...props} />
  }

  return <ResponsiveWrapper>{size => getSizedElement(size)}</ResponsiveWrapper>
}

export { breakpoints, withBreakpoints }
