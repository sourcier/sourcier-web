import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Prose, HeroCentered } from '@sourcier/ui-components';

import Layout from '../components/layout';
import { Seo } from '../components/seo';

const ContentPage = ({ data, location }) => {
  return (
    <>
      <Seo
        title={data.mdx.frontmatter.meta_title}
        description={data.mdx.frontmatter.meta_description}
        pathname={location.pathname}
      />
      <Layout>
        <div className="max-w-6xl px-4 mx-auto my-8">
          <HeroCentered heading={data.mdx.frontmatter.title} fullHeight />
          <Prose>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Prose>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        meta_title
        meta_description
      }
      body
    }
  }
`;

export default ContentPage;
