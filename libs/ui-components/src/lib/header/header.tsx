import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export interface HeaderProps {
  brand: string;
  nav?: {
    text: string;
    href: string;
  }[];
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export function Header({
  brand,
  nav,
  toggleDarkMode,
  isDarkMode,
}: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (document && window) {
      if (isVisible) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isVisible]);

  return (
    <nav className="pt-4 bg-white border-b border-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-900-contrast">
      <div className="max-w-3xl px-4 mx-auto">
        <div className="flex justify-between pb-4">
          <div className="flex space-x-7">
            <div>
              {/* brand */}
              <a href="/" className="flex items-center px-2 py-4">
                <span
                  className="text-xl font-semibold"
                  data-testid="site-brand"
                >
                  {brand}
                </span>
              </a>
            </div>

            {/* nav items */}
            <div className="items-center hidden space-x-1 md:flex">
              {nav &&
                nav.map(({ text, href }, idx) => (
                  <a
                    href={href}
                    className="px-2 py-4 font-semibold"
                    key={`nav-item-${idx}`}
                  >
                    {text}
                  </a>
                ))}
            </div>
          </div>

          {/* Secondary Navbar items */}
          <div className="flex items-center ml-auto mr-4 space-x-3 md:mr-0">
            {toggleDarkMode && (
              <button onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <FaMoon className="w-5 h-5" />
                ) : (
                  <FaSun className="w-6 h-6" />
                )}
              </button>
            )}
          </div>

          {/* mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="outline-none"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={clsx(
          'h-screen text-center text-xl pt-8 dark:bg-gray-900 dark:text-gray-900-contrast border-t border-gray-50 dark:border-gray-800',
          {
            hidden: !isVisible,
          }
        )}
      >
        <ul>
          {nav &&
            nav.map(({ text, href }, idx) => (
              <li key={`mobile-nav-item-${idx}`}>
                <a href={href} className="block px-2 py-4">
                  {text}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
