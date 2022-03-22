import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Sidebar, Navbar, Footer } from '@sourcier/ui-components';
import { SyntheticEvent, useEffect, useState } from 'react';

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const nav = [
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
];

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brand
          copyright
        }
      }
    }
  `);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (event: SyntheticEvent) => {
    event.preventDefault();

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
    <>
      <Helmet>
        <title>{pageTitle || data.site.siteMetadata.brand}</title>
      </Helmet>
      <div className="w-full h-screen rounded drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar
            brand={data.site.siteMetadata.brand}
            nav={nav}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <div className="flex-1 mx-auto">
            {pageTitle && <h1>{pageTitle}</h1>}
            {children}
          </div>
          <Footer copyright={data.site.siteMetadata.copyright} />
        </div>
        <Sidebar brand={data.site.siteMetadata.brand} nav={nav} />
      </div>
    </>
  );
};

export default Layout;
