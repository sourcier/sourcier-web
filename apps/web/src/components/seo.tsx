import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SeoProps {
  title?: string;
  description?: string;
  meta?: { name: string; content: string }[];
  lang?: string;
}

export const Seo = ({ description, lang = 'en', title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default Seo;
