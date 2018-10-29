# react-adaptive

A Higher Order Component (HOC) allowing you to adapt your component display according to its own size and integrate your website with adaptive design.

## Information

<table>
<tr>
<td>Package</td><td>react-adaptive</td>
</tr>
<tr>
<td>Description</td>
<td>Element size in react for adaptive design</td>
</tr>
</table>

## Install
```sh
npm install react-adaptive-component
```


## Usage

### Using HOC with custom calculation

In that case, you have to define a function receiving the size of the component and returning expected component.

```js
import React, { Component } from "react";
import { getResponsiveComponent } from "./ResponsiveComponent";

class LargeComponent extends Component {
  render() {
    return (
      <div className="flex">
        My large with HOC and calculation {this.props.name}
      </div>
    );
  }
}

class MediumComponent extends Component {
  render() {
    return (
      <div className="flex">
        My medium with HOC and calculation {this.props.name}
      </div>
    );
  }
}

class SmallComponent extends Component {
  render() {
    return (
      <div className="flex">
        My small with HOC and calculation {this.props.name}
      </div>
    );
  }
}

const mapSizeToComponent = size => props => {
  if (size.width < 400) {
    return <SmallComponent {...props} />;
  }

  if (size.width < 700) {
    return <MediumComponent {...props} />;
  }

  return <LargeComponent {...props} />;
};

export default getResponsiveComponent({ mapSizeToComponent });
```

### Using breakpoint HOC

In that case, you have to define a set of breakpoints, up to 7, and a set of associated components.  
Breakpoints name : `[xSmall, small, mediumSmall, medium, mediumLarge, large, xLarge]`

```js
import React, { Component } from "react";
import { withResponsive, sizes } from "./ResponsiveComponent";

class LargeComponent extends Component {
  render() {
    return (
      <div className="flex">My large component with HOC {this.props.name}</div>
    );
  }
}

class MediumComponent extends Component {
  render() {
    return (
      <div className="flex">My medium component with HOC {this.props.name}</div>
    );
  }
}

class SmallComponent extends Component {
  render() {
    return (
      <div className="flex">My small component with HOC {this.props.name}</div>
    );
  }
}

const components = {
  [sizes.large]: LargeComponent,
  [sizes.medium]: MediumComponent,
  [sizes.small]: SmallComponent
};

const breakPoints = {
  [sizes.large]: 1000,
  [sizes.medium]: 700,
  [sizes.small]: 400
};

export default withResponsive(breakPoints)({
  components,
  defaultComponent: LargeComponent
});
```

### Using render props

In that case, you have to wrap your component in `ResponsiveWrapper` component. It will allow you to give the `size` props to your component.

```js
import React from "react";
import { ResponsiveWrapper } from "./ResponsiveComponent";

import "./styles.css";

function MyResponsiveComponent() {
  return (
      <ResponsiveWrapper>
        {size => <MyComponent width={size.width} />}
      </ResponsiveWrapper>
  );
}

export default MyComponent;
```