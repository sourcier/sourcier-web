module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: 'sourcier.uk',
    description: "Roger Rajaratnam's website about software development",
    siteUrl:
      process.env.GATSBY_APP_ENV === 'main'
        ? 'http://sourcier.uk'
        : process.env.GATSBY_APP_ENV === 'develop'
        ? 'http://develop.sourcier.uk'
        : 'http://localhost:4200',
    brand: `Sourcier`,
    nav: [
      { text: 'Blog', href: '/blog' },
      { text: 'Contact', href: '/contact-us' },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `web`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1120,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/*.mock.(js|ts)?(x)'],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_APP_GA,
          cookieName: 'CookieConsent',
        },
      },
    },
  ],
};
