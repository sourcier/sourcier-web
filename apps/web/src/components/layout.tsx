import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header } from '@sourcier/ui-components';

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
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
        <title>{pageTitle || data.site.siteMetadata.brand}</title>
      </Helmet>

      <Header
        brand={data.site.siteMetadata.brand}
        nav={[
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
        ]}
      />

      <main className="max-w-3xl px-4 py-8 mx-auto prose prose-lg prose-slate">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
    </>
  );
};

export default Layout;
