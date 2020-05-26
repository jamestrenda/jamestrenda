import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import Blockquote from '../components/blockquote';
import heroStyles from '../components/hero.module.css';

class BlogPostTemplate extends React.Component {
	render() {
		const post = get(this.props, 'data.contentfulBlogPost');

		return (
			<Layout location={this.props.location}>
				<div style={{ background: '#fff' }}>
					<Helmet title={`${post.title}`} />
					<div className={heroStyles.hero}>
						<Img
							className={heroStyles.heroImage}
							alt={post.title}
							fluid={post.heroImage.fluid}
						/>
					</div>
					<div className="wrapper">
						<h1 className="section-headline">{post.title}</h1>
						<p
							style={{
								display: 'block',
							}}
						>
							{post.publishDate}
						</p>
						<p>Updated: {post.updatedAt}</p>
						<div>
							{documentToReactComponents(post.body.json, {
								renderNode: {
									[BLOCKS.QUOTE]: (node, children) => (
										<Blockquote>{children}</Blockquote>
									),
								},
							})}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishDate(formatString: "MMMM Do, YYYY")
			updatedAt(fromNow: true)
			heroImage {
				fluid(maxWidth: 1180, background: "rgb:000000") {
					...GatsbyContentfulFluid_tracedSVG
				}
			}
			body {
				id
				json
			}
			seo {
				title
				description
			}
			tags
			description {
				description
				childMarkdownRemark {
					rawMarkdownBody
				}
			}
			author {
				name
				image {
					title
					fluid(maxWidth: 100, quality: 90, toFormat: WEBP) {
						src
					}
				}
				instagram
				twitter
				facebook
				github
			}
		}
	}
`;
