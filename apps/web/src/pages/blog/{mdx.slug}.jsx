import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Giscus } from '@giscus/react';
import { useSelector } from 'react-redux';
import {
  HeroWithImageOverlay,
  HeroWithImage,
  Breadcrumbs,
  Prose,
} from '@sourcier/ui-components';

import Layout from '../../components/layout';
import {
  selectIsDarkMode,
  selectIsProduction,
} from '../../store/slices/configSlice';

const BlogPost = ({ data, location }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const isProduction = useSelector(selectIsProduction);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="max-w-6xl px-4 mx-auto my-8">
        <Breadcrumbs path={location.pathname} />
        <HeroWithImage
          heading={data.mdx.frontmatter.title}
          copy={data.mdx.excerpt}
          imageUrl={
            data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
              .images.fallback.src
          }
          imageAlt={data.mdx.frontmatter.hero_image_alt}
          className="hidden md:block"
        />
        <HeroWithImageOverlay
          heading={data.mdx.frontmatter.title}
          copy={data.mdx.excerpt}
          imageUrl={
            data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
              .images.fallback.src
          }
          className="md:hidden"
        />
        <Prose>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Prose>
        {isProduction && (
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
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
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
    }
  }
`;

export default BlogPost;
