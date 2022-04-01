import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SeoProps {
  pathname: string;
  title?: string;
  description?: string;
  meta?: { name: string; content: string }[];
  lang?: string;
  image?: {
    height: number;
    width: number;
    images: { fallback: { src: string } };
  };
}

export const Seo = ({ description, lang = 'en', title, pathname, image }) => {
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

  const isProduction = process.env.GATSBY_APP_ENV === 'main';
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{metaTitle}</title>
      {isProduction ? (
        <meta name="robots" content="all" />
      ) : (
        <meta name="robots" content="none" />
      )}
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
      {image ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      {image && (
        <meta
          name="og:image"
          content={`${site.siteMetadata.siteUrl}${image.images.fallback.src}`}
        />
      )}
      {image && <meta name="og:image:width" content={image.width} />}
      {image && <meta name="og:image:height" content={image.height} />}
    </Helmet>
  );
};

export default Seo;
