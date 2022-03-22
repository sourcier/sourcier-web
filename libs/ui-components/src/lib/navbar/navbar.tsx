import clsx from 'clsx';
import { BsMoon, BsSun } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';

export interface NavbarProps {
  brand: string;
  nav: {
    text: string;
    href: string;
  }[];
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
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
          <CgMenuLeft className="inline-block w-4 h-4" />
        </label>
        <a
          className="text-xl normal-case btn btn-ghost"
          href="/"
          data-testid="site-brand"
        >
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
        <button
          className={clsx('btn btn-ghost swap swap-rotate', {
            'swap-active': isDarkMode,
          })}
          onClick={toggleDarkMode}
        >
          <BsSun className="inline-block w-4 h-4 swap-on" />
          <BsMoon className="inline-block w-4 h-4 swap-off" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
