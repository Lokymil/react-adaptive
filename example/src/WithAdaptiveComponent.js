import React from 'react'
import { withAdaptive } from 'react-adaptive'

const Small = ({ className })  => <div className={className}>I am small</div>
const Medium = ({ className })  => <div className={className}>I am medium</div>
const Large = ({ className })  => <div className={className}>I am large</div>

const mapSizeToComponent = size => props => {
  if (size.width < 400) {
    return <Small {...props} />
  }

  if (size.width < 700) {
    return <Medium {...props} />
  }

  return <Large {...props} />
}

export default withAdaptive({ mapSizeToComponent })
