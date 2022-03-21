import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '@sourcier/ui-components';
import { useEffect, useState } from 'react';

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

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (localStorage && document) {
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('color-theme', 'dark');
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('color-theme', 'light');
          setIsDarkMode(false);
        }
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('color-theme', 'light');
          setIsDarkMode(false);
        } else {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('color-theme', 'dark');
          setIsDarkMode(true);
        }
      }
    }
  };

  useEffect(() => {
    if (localStorage && document && window) {
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        setIsDarkMode(false);
      }
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>{pageTitle || data.site.siteMetadata.brand}</title>
      </Helmet>

      <Header
        brand={data.site.siteMetadata.brand}
        nav={[
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
        ]}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="container flex-grow max-w-3xl px-4 py-8 mx-auto prose prose-lg prose-gray dark:prose-invert">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>

      <Footer copyright="Copyright © 2022 - All rights reserved by Sourcier Ltd." />
    </div>
  );
};

export default Layout;
