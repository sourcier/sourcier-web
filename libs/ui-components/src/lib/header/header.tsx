import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export interface HeaderProps {
  brand: string;
  nav?: {
    text: string;
    href: string;
  }[];
}

export function Header({ brand, nav }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="shadow-sm bg-slate-900">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* brand */}
              <a href="/" className="flex items-center px-2 py-4">
                <span
                  className="text-lg font-semibold text-white"
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
                    className="px-2 py-4 font-semibold text-white hover:text-pink-300"
                    key={`nav-item-${idx}`}
                  >
                    {text}
                  </a>
                ))}
            </div>
          </div>

          {/* mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-pink-300 outline-none"
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
        className={clsx({
          hidden: !isVisible,
        })}
      >
        <ul className="px-4">
          {nav &&
            nav.map(({ text, href }, idx) => (
              <li key={`mobile-nav-item-${idx}`}>
                <a
                  href={href}
                  className="block px-2 py-4 text-sm text-white transition duration-300 active:bg-pink-300"
                >
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
