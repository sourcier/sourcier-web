import { Card } from '@sourcier/ui-components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        const image = getImage(node.frontmatter.hero_image);

        return (
          <Card
            href={`/blog/${node.slug}`}
            heading={node.frontmatter.title}
            image={
              <GatsbyImage
                image={image}
                alt={node.frontmatter.hero_image.alt}
              />
            }
            copy={node.excerpt}
          />
        );
      })}
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
