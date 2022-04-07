import { useCallback, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Sidebar, Navbar, Footer } from '@sourcier/ui-components';
import { useDispatch, useSelector } from 'react-redux';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { Helmet } from 'react-helmet';

import { setIsDarkMode, selectIsDarkMode } from '../store/slices/configSlice';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();
  const hasCookieConsent = getCookieConsentValue();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brand
          nav {
            href
            text
          }
        }
      }
    }
  `);

  const setTheme = useCallback(
    (theme: 'dark' | 'light') => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('color-theme', theme);
      dispatch(setIsDarkMode(theme === 'dark'));
    },
    [dispatch]
  );

  const toggleDarkMode = () => {
    if (localStorage && document) {
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      } else {
        if (document.documentElement.classList.contains('dark')) {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }
    }
  };

  // Set theme on first load based on user's preference
  useEffect(() => {
    if (localStorage && document && window) {
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, [dispatch, setTheme]);

  return (
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
        <Footer />
        <CookieConsent
          enableDeclineButton
          disableStyles
          buttonText="Accept All"
          declineButtonText="Reject All"
          containerClasses="alert alert-info shadow-lg fixed -translate-x-1/2 left-1/2 max-w-[95vw] mb-2 md:mb-4"
          buttonClasses="btn btn-sm btn-primary"
          buttonWrapperClasses="flex-none"
          declineButtonClasses="btn btn-sm btn-ghost"
          acceptOnScroll={true}
        >
          <p>
            <strong>We value your privacy</strong>
            <br />
            We use cookies to enhance your browsing experience and analyze our
            traffic. By clicking "Accept All", you consent to our use of
            cookies.{' '}
            <a href="/cookie-policy" className="link link-hover">
              Read More
            </a>
          </p>
        </CookieConsent>
      </div>
      <Sidebar
        brand={data.site.siteMetadata.brand}
        nav={data.site.siteMetadata.nav}
      />
      {hasCookieConsent === 'true' && process.env.GATSBY_APP_GA && (
        <Helmet>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_APP_GA}`}
          ></script>
          <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GATSBY_APP_GA}');
            `}
          </script>
        </Helmet>
      )}
    </div>
  );
};

export default Layout;
