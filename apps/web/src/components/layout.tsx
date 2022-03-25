import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Sidebar, Navbar, Footer } from '@sourcier/ui-components';
import { useDispatch, useSelector } from 'react-redux';

import { setIsDarkMode, selectIsDarkMode } from '../store/slices/configSlice';

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brand
          copyright
          nav {
            href
            text
          }
        }
      }
    }
  `);

  const toggleDarkMode = () => {
    if (localStorage && document) {
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('color-theme', 'dark');
          dispatch(setIsDarkMode(true));
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('color-theme', 'light');
          dispatch(setIsDarkMode(false));
        }
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('color-theme', 'light');
          dispatch(setIsDarkMode(false));
        } else {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('color-theme', 'dark');
          dispatch(setIsDarkMode(true));
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
        dispatch(setIsDarkMode(true));
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        dispatch(setIsDarkMode(false));
      }
    }
  }, [dispatch]);

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
            nav={data.site.siteMetadata.nav}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <div className="flex-1">{children}</div>
          <Footer copyright={data.site.siteMetadata.copyright} />
        </div>
        <Sidebar
          brand={data.site.siteMetadata.brand}
          nav={data.site.siteMetadata.nav}
        />
      </div>
    </>
  );
};

export default Layout;
