import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styles from './about.module.css';
import Layout from '../components/layout';

class AboutIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title');
		const me = get(this.props, 'data.contentfulPerson');
		const { src } = me.image.fixed;
		return (
			<Layout location={this.props.location}>
				<div>
					<Helmet title={siteTitle} />
					<h1>About</h1>
					<div className="wrapper">
						<img src={src} alt={me.name} />
					</div>
				</div>
			</Layout>
		);
	}
}

export default AboutIndex;

export const me = graphql`
	query Me {
		contentfulPerson(contentful_id: { eq: "4r1rzSbdHLnzV0HESITMyb" }) {
			id
			name
			contentful_id
			instagram
			image {
				id
				fixed {
					src
				}
			}
		}
	}
`;
