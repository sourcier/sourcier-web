import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  HeroWithImageOverlay,
  HeroWithImage,
  Breadcrumbs,
} from '@sourcier/ui-components';

import Layout from '../../components/layout';

const BlogPost = ({ data, location }) => {
  const pagePath = location.pathname
    ? location.pathname.replace(/2022\//g, '')
    : '';

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="max-w-6xl px-4 mx-auto my-8">
        <Breadcrumbs
          path={pagePath}
          leafRewrite={{ pattern: 'blog/', replacement: 'blog/2022/' }}
        />
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
        <div className="prose prose-lg max-w-none dark:prose-invert prose-img:rounded-lg">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
