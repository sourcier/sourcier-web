module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    brand: `Sourcier`,
    copyright: 'Copyright © 2022 All rights reserved by Sourcier Ltd.',
    nav: [
      { text: 'About', href: '/about' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `web`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [
          [
            require('gatsby-remark-vscode').remarkPlugin,
            {
              theme: {
                default: 'Light (Visual Studio)',
                parentSelector: {
                  'html[data-theme=dark]': 'Dark (Visual Studio)',
                },
              },
              extensions: [],
            },
          ],
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
  ],
};
