import { Card } from '@sourcier/ui-components';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto my-8 md:grid-cols-2 lg:grid-cols-3">
        {data.allMdx.nodes.map((node) => {
          return (
            <Card
              href={`/blog/${node.slug}`}
              heading={node.frontmatter.title}
              imgSrc={
                node.frontmatter.hero_image.childImageSharp.gatsbyImageData
                  .images.fallback.src
              }
              imgAlt={node.frontmatter.hero_image.alt}
              copy={node.excerpt}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
        slug
        excerpt
      }
    }
  }
`;

export default BlogPage;
