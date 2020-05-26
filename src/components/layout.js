import React from 'react';
import './base.css';
import Container from './container';
import Meta from './meta';
import Navigation from './navigation';

class Template extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<Container>
				<Meta />
				<Navigation />
				{children}
			</Container>
		);
	}
}

export default Template;
