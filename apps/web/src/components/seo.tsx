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
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:url" content={canonical} />
      <meta name="og:type" content="website" />
      <meta name="og:site" content="sourcier.uk" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content="@sourcier" />
      <meta name="twitter:creator" content="@sourcier" />
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="og:image" content="" /> */}
      {/* <meta name="og:image:width" content="" /> */}
      {/* <meta name="og:image:height" content="" /> */}
    </Helmet>
  );
};

export default Seo;
