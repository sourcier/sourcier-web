import clsx from 'clsx';
import { SyntheticEvent } from 'react';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

export interface NavbarProps {
  brand: string;
  nav: {
    text: string;
    href: string;
  }[];
  isDarkMode?: boolean;
  toggleDarkMode?: (event: SyntheticEvent) => void;
}

export const Navbar = ({
  brand,
  nav,
  toggleDarkMode,
  isDarkMode = false,
}: NavbarProps) => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <FaBars />
        </label>
        <a className="text-xl normal-case btn btn-ghost" href="/">
          {brand}
        </a>
      </div>
      <div className="navbar-end">
        <ul className="p-0 menu menu-horizontal">
          {nav.map(({ text, href }, idx) => (
            <li key={idx}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
        <label
          className={clsx('swap btn btn-ghost', { 'swap-active': isDarkMode })}
          onClick={toggleDarkMode}
        >
          <div className="swap-on">
            <FaSun className="fill-current swap-on" />
          </div>
          <div className="swap-off">
            <FaMoon className="fill-current swap-off" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
