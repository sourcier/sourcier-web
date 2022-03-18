import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '@sourcier/ui-components';

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
    <div className="flex flex-col justify-between h-screen">
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

      <main className="max-w-3xl px-4 py-8 mx-auto prose prose-lg prose-grey">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>

      <Footer copyright="Copyright © 2022 - All rights reserved by Sourcier Ltd." />
    </div>
  );
};

export default Layout;
