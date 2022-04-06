/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async function ({ actions, graphql }) {
  // get all content posts
  const { data } = await graphql(`
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
  data.allMdx.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/content-page.tsx'),
      context: { slug },
    });
  });
};
