/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async function ({ actions, graphql }) {
  // get all content posts
  const contentPages = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/content/" } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `);

  // create routes for all content posts
  contentPages.data.allMdx.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/content-page.tsx'),
      context: { slug },
    });
  });

  // get all blog posts
  const blogPages = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/blog/" } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `);

  // create routes for all blog posts
  blogPages.data.allMdx.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve('./src/templates/blog-page.tsx'),
      context: { slug },
    });
  });
};
