import React, { Component } from 'react'
import WithSizeComponent from './WithSizeComponent'
import WithBreakpointsComponent from './WithBreakpointsComponent'
import WithFewerBreakpointsComponent from './WithFewerBreakpointsComponent'
import WithAdaptiveComponent from './WithAdaptiveComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Component using "withSize" HOC</h3>
        <WithSizeComponent className="red center" />
        <div className="center">
          <WithSizeComponent className="green center" />
          <WithSizeComponent className="blue center" />
        </div>

        <h3 className="center">Component using "withBreakpoints" HOC (all break points)</h3>
        <WithBreakpointsComponent className="red center" />
        <div className="center">
          <WithBreakpointsComponent className="green center" />
          <WithBreakpointsComponent className="blue center" />
        </div>

        <h3 className="center">Component using "withBreakpoints" HOC (only 3 break points)</h3>
        <WithFewerBreakpointsComponent className="red center" />
        <div className="center">
          <WithFewerBreakpointsComponent className="green center" />
          <WithFewerBreakpointsComponent className="blue center" />
        </div>

        <h3 className="center">Component using "withAdaptive" HOC</h3>
        <WithAdaptiveComponent className="red center" />
        <div className="center">
          <WithAdaptiveComponent className="green center" />
          <WithAdaptiveComponent className="blue center" />
        </div>
      </div>
    )
  }
}
