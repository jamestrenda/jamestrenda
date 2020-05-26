import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import PageTitle from './page-title';

const Meta = () => (
	<StaticQuery
		query={graphql`
			{
				site {
					siteMetadata {
						title
						titleTemplate
						description
						siteUrl
						image
						author {
							name
						}
						# organization {
						# 	name
						# 	url
						# 	logo
						# }
						# social {
						#   twitter
						#   fbAppID
						# }
					}
				}
			}
		`}
		render={({ site: { siteMetadata: seo } }) => {
			const title = seo.title;
			const titleTemplate = seo.titleTemplate;
			const description = seo.description;
			// const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
			// const url = postMeta.slug
			// 	? `${seo.siteUrl}/${postMeta.slug}/`
			// 	: seo.siteUrl;
			// const datePublished = isBlogPost ? postMeta.datePublished : false;

			return (
				<>
					<Helmet title={title} titleTemplate={titleTemplate}>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<meta charSet="utf-8" />
						{/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
						<meta name="description" content={description} />
						{/* <meta name="image" content={image} />
					<link rel="canonical" href={url} /> */}

						{/* OpenGraph tags */}
						{/* <meta property="og:url" content={url} /> */}
						{/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
						<meta property="og:title" content={title} />
						<meta property="og:description" content={description} />
						{/* <meta property="og:image" content={image} /> */}
						{/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

						{/* Twitter Card tags */}
						{/* <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:creator" content={seo.social.twitter} />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} /> */}
					</Helmet>
				</>
			);
		}}
	/>
);

export default Meta;
