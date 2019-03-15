import React from 'react'
import PropTypes from 'prop-types'
import { withSize, withSizePropTypes } from 'react-adaptive'

const ExampleComponent = ({ size, className }) => <div className={className}>My current width is: {size.width}</div>

ExampleComponent.propTypes = {
  ...withSizePropTypes,
  className: PropTypes.string
}

export default withSize(ExampleComponent, 'exampleClassName')