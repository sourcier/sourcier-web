import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header } from '@sourcier/ui-components';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brand
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{pageTitle | data.site.siteMetadata.brand}</title>
      </Helmet>

      <Header
        brand={data.site.siteMetadata.brand}
        nav={[
          { text: 'Home', href: '/' },
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
        ]}
      />

      <main>{children}</main>
    </>
  );
};

export default Layout;
