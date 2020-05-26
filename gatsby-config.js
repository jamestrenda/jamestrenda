// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
require('dotenv').config();

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
	contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the access token need to be provided.'
	);
}

module.exports = {
	siteMetadata: {
		title: '',
		titleTemplate: '%s • James Trenda',
		description: `
			  The description will be shown in SEO results on pages
			  without their own descriptions.
			`,
		siteUrl: 'https://jamestrenda.com',
		image: 'https://jamestrenda.com/images/jt.jpg',
		author: {
			name: 'Your Name',
			minibio: `
				This bio is shown at the bottom of each blog post. It supports
				<strong>custom HTML</strong> if you’re into that sort of thing.
			  `,
		},
		organization: {
			name: 'James Trenda',
			url: 'https://jamestrenda.com',
			logo: 'https://jamestrenda.com/android-chrome-512x512.png',
		},
		social: {
			twitter: '@jamestrenda',
			instagram: '@jamestrenda',
			fbAppID: '',
		},
		categories: [
			{
				slug: 'test',
				name: 'Test Category',
			},
		],
	},
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
		},
	],
};
