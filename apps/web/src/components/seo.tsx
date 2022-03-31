import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SeoProps {
  pathname: string;
  title?: string;
  description?: string;
  meta?: { name: string; content: string }[];
  lang?: string;
}

export const Seo = ({ description, lang = 'en', title, pathname }) => {
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
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default Seo;
