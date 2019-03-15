import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResponsiveWrapper extends Component {
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
        className={this.props.className}
        style={this.props.className ? {} : {'display': 'flex', 'flex-grow': '1'}}
      >
        {this.props.children({ width: this.state.width })}
      </div>
    )
  }
}

ResponsiveWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired
}

export const responsiveWrapperPropTypes = {
  size: PropTypes.shape({ width: PropTypes.number })
}

export default ResponsiveWrapper
