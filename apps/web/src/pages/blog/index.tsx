import { Breadcrumbs, Card } from '@sourcier/ui-components';
import { graphql } from 'gatsby';
import { BsClockFill } from 'react-icons/bs';

import Layout from '../../components/layout';

const BlogPage = ({ data, location }) => {
  const renderPills = (node) => (
    <div className="badge badge-secondary">
      <BsClockFill className="inline-block mr-2" />
      {`${node.timeToRead} ${
        node.timeToRead === 1 ? 'minute' : 'minutes'
      } read`}
    </div>
  );

  return (
    <Layout pageTitle="My Blog Posts">
      <div className="max-w-6xl px-4 mx-auto my-8">
        <div className="my-8">
          <Breadcrumbs path={location.pathname} leafAsFolder />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.allMdx.nodes.map((node) => {
            return (
              <Card
                key={node.id}
                href={`/blog/${node.slug}`}
                heading={node.frontmatter.title}
                imgSrc={
                  node.frontmatter.hero_image.childImageSharp.gatsbyImageData
                    .images.fallback.src
                }
                imgAlt={node.frontmatter.hero_image.alt}
                copy={node.excerpt}
                pills={renderPills(node)}
              />
            );
          })}
        </div>
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
        timeToRead
      }
    }
  }
`;

export default BlogPage;
