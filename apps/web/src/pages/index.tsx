import { HeroCentered, Prose, Card } from '@sourcier/ui-components';
import { graphql } from 'gatsby';
import { BsClockFill } from 'react-icons/bs';

import Layout from '../components/layout';
import { Seo } from '../components/seo';

export const HomePage = ({ data, location }) => {
  const renderPills = (node) => (
    <div className="badge badge-secondary">
      <BsClockFill className="inline-block mr-1" />
      {`${node.timeToRead} ${
        node.timeToRead === 1 ? 'minute' : 'minutes'
      } read`}
    </div>
  );

  return (
    <>
      <Seo pathname={location.pathname} />
      <Layout>
        <div className="max-w-6xl px-4 mx-auto my-8">
          <HeroCentered
            copy={
              <p className="py-6 text-xl">
                I'm{' '}
                <span className="badge badge-secondary badge-lg">
                  Roger Rajaratnam
                </span>{' '}
                a London based software engineer working on building meaningful
                digital experiences.
              </p>
            }
            heading="👋 hey there!"
            fullHeight
          />

          <Prose>
            <p>
              I love making software that is memorable and truly joyful to use.
              My goal with this blog is to document and share the things I learn
              with every new project.
            </p>
            <p>
              Need to get in touch with me? Reach out on{' '}
              <a
                href="https://twitter.com/sourcier"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{' '}
              or by{' '}
              <a
                href="mailto:roger@sourcier.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                email
              </a>
              .
            </p>

            <h2>Recently Published</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 not-prose">
              {data.allMdx.nodes.map((node) => {
                return (
                  <Card
                    key={node.id}
                    href={`/blog/${node.slug}`}
                    heading={node.frontmatter.title}
                    imgSrc={
                      node.frontmatter.hero_image.childImageSharp
                        .gatsbyImageData.images.fallback.src
                    }
                    imgAlt={node.frontmatter.hero_image.alt}
                    copy={node.excerpt}
                    pills={renderPills(node)}
                  />
                );
              })}
            </div>
          </Prose>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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

export default HomePage;
