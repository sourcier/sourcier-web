import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
export interface SeoProps {
  pathname: string;
  title?: string;
  description?: string;
  meta?: { name: string; content: string }[];
  lang?: string;
  image?: {
    height: string;
    width: string;
    images: { fallback: { src: string } };
  };
}

export const Seo = ({
  description,
  lang = 'en',
  title,
  pathname,
  image,
}: SeoProps) => {
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
  const metaImage = image
    ? image.images.fallback.src
    : `${site.siteMetadata.siteUrl}/images/icon.svg`;
  const metaImageWidth = image ? image.width : '512';
  const metaImageHeight = image ? image.height : '512';

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:image" content={`${metaImage}`} />
      <meta name="og:image:width" content={metaImageWidth} />
      <meta name="og:image:height" content={metaImageHeight} />
    </Helmet>
  );
};

export default Seo;
