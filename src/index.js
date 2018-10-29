import React from 'react'
import classNames from 'classnames'
import './styles.css'

class ResponsiveWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
  }

  componentDidMount() {
    this.setState(this.getUpdatedSize())
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }
    window.removeEventListener('resize', this.handleResize)
  }

  getUpdatedSize = () => {
    if (!this.wrapper) {
      return null
    }
    return { width: this.wrapper.clientWidth }
  }

  handleResize = () => {
    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }
    this.timeOut = setTimeout(() => this.setState(this.getUpdatedSize()), 100)
  }

  render() {
    return (
      <div
        ref={ref => {
          this.wrapper = ref
        }}
				className={classNames("wrapper", this.props.className)}
      >
        {this.props.children({ width: this.state.width })}
      </div>
    )
  }
}

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
    } else if (componentBreakPoints[breakpoints.small] && componentBreakPoints[breakpoints.small] >= size.width) {
      DisplayedComponent = components[breakpoints.small]
    } else if (
      componentBreakPoints[breakpoints.mediumSmall] &&
      componentBreakPoints[breakpoints.mediumSmall] >= size.width
    ) {
      DisplayedComponent = components[breakpoints.mediumSmall]
    } else if (componentBreakPoints[breakpoints.medium] && componentBreakPoints[breakpoints.medium] >= size.width) {
      DisplayedComponent = components[breakpoints.medium]
    } else if (
      componentBreakPoints[breakpoints.mediumLarge] &&
      componentBreakPoints[breakpoints.mediumLarge] >= size.width
    ) {
      DisplayedComponent = components[breakpoints.mediumLarge]
    } else if (componentBreakPoints[breakpoints.large] >= size.width) {
      DisplayedComponent = components[breakpoints.large]
    } else if (componentBreakPoints[breakpoints.xLarge] && componentBreakPoints[breakpoints.xLarge] >= size.width) {
      DisplayedComponent = components[breakpoints.xLarge]
    }

    return <DisplayedComponent {...props} />
  }

  return <ResponsiveWrapper>{size => getSizedElement(size)}</ResponsiveWrapper>
}

const withAdaptive = ({ mapSizeToComponent }) => props => {
  return <ResponsiveWrapper>{size => mapSizeToComponent(size)(props)}</ResponsiveWrapper>
}

const withSize = Component => props => (
  <ResponsiveWrapper>{size => <Component size={size} {...props} />}</ResponsiveWrapper>
)

export { breakpoints, withBreakpoints, withAdaptive, withSize }
