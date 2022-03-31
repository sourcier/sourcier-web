import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Giscus } from '@giscus/react';
import { useSelector } from 'react-redux';
import { BsCalendar2EventFill, BsClockFill } from 'react-icons/bs';
import {
  HeroWithImageOverlay,
  HeroWithImage,
  Breadcrumbs,
  Prose,
} from '@sourcier/ui-components';

import Layout from '../../components/layout';
import { selectIsDarkMode } from '../../store/slices/configSlice';

const BlogPost = ({ data, location }) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  const renderCopy = (data) => (
    <div className="text-center md:text-left text-md">
      <p>
        <BsCalendar2EventFill className="inline-block mr-2" />
        {data.mdx.frontmatter.date}
      </p>
      <p>
        <BsClockFill className="inline-block mr-2" />
        {`${data.mdx.timeToRead} ${
          data.mdx.timeToRead === 1 ? 'minute' : 'minutes'
        } read`}
      </p>
    </div>
  );

  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    >
      <div className="max-w-6xl px-4 mx-auto my-8">
        <Breadcrumbs path={location.pathname} />

        <HeroWithImage
          heading={data.mdx.frontmatter.title}
          copy={renderCopy(data)}
          imageUrl={
            data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
              .images.fallback.src
          }
          imageAlt={data.mdx.frontmatter.hero_image_alt}
          className="hidden md:block"
        />

        <HeroWithImageOverlay
          heading={data.mdx.frontmatter.title}
          copy={renderCopy(data)}
          imageUrl={
            data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
              .images.fallback.src
          }
          className="md:hidden"
        />

        <Prose>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Prose>

        <div className="divider"></div>

        <Prose>
          <p>
            Written by Roger Rajaratnam, a London based software engineer
            working on building delightful digital experiences. Want to get in
            touch? Reach out on{' '}
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
        </Prose>

        <div className="mt-16">
          <h2 className="my-8 text-2xl text-center">
            Did you find this article helpful?
          </h2>
          <Giscus
            repo="sourcier/sourcier-web"
            repoId="R_kgDOG0xBpA"
            category="Comments"
            categoryId="DIC_kwDOG0xBpM4COQ0_"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={isDarkMode ? 'dark_dimmed' : 'light'}
            lang="en"
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      excerpt
      timeToRead
    }
  }
`;

export default BlogPost;
