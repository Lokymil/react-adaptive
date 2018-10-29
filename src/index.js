import React from 'react';

class ResponsiveWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0
		};
	}

	componentDidMount() {
		this.setState(this.getUpdatedSize());
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		if (this.timeOut) {
			clearTimeout(this.timeOut);
		}
		window.removeEventListener('resize', this.handleResize);
	}

	getUpdatedSize = () => {
		if (!this.wrapper) {
			return null;
		}
		return { width: this.wrapper.clientWidth };
	};

	handleResize = () => {
		if (this.timeOut) {
			clearTimeout(this.timeOut);
		}
		this.timeOut = setTimeout(() => this.setState(this.getUpdatedSize()), 100);
	};

	render() {
		return (
			<div
				ref={ref => {
					this.wrapper = ref;
				}}
				className={this.props.className}
			>
				{this.props.children({ width: this.state.width })}
			</div>
		);
	}
}

const sizes = {
	xSmall: 'XSmall',
	small: 'Small',
	mediumSmall: 'MediumSmall',
	medium: 'Medium',
	mediumLarge: 'MediumLarge',
	large: 'Large',
	xLarge: 'XLarge'
};

const withBreakpoints = breakPoints => ({ components, defaultComponent }) => props => {
	const getSizedElement = size => {
		let DisplayedComponent = defaultComponent || null;

		if (breakPoints[sizes.xSmall] && breakPoints[sizes.xSmall] >= size.width) {
			DisplayedComponent = components[sizes.xSmall];
		} else if (breakPoints[sizes.small] && breakPoints[sizes.small] >= size.width) {
			DisplayedComponent = components[sizes.small];
		} else if (breakPoints[sizes.mediumSmall] && breakPoints[sizes.mediumSmall] >= size.width) {
			DisplayedComponent = components[sizes.mediumSmall];
		} else if (breakPoints[sizes.medium] && breakPoints[sizes.medium] >= size.width) {
			DisplayedComponent = components[sizes.medium];
		} else if (breakPoints[sizes.mediumLarge] && breakPoints[sizes.mediumLarge] >= size.width) {
			DisplayedComponent = components[sizes.mediumLarge];
		} else if (breakPoints[sizes.large] >= size.width) {
			DisplayedComponent = components[sizes.large];
		} else if (breakPoints[sizes.xLarge] && breakPoints[sizes.xLarge] >= size.width) {
			DisplayedComponent = components[sizes.xLarge];
		}

		return <DisplayedComponent {...props} />;
	};

	return <ResponsiveWrapper>{size => getSizedElement(size)}</ResponsiveWrapper>;
};

const withAdaptive = ({ mapSizeToComponent }) => props => {
	return <ResponsiveWrapper>{size => mapSizeToComponent(size)(props)}</ResponsiveWrapper>;
};

const withSize = Component => props => (
	<ResponsiveWrapper>{size => <Component size={size} {...props} />}</ResponsiveWrapper>
);

export { sizes, withBreakpoints, withAdaptive, withSize };
