import { BsMoonStars, BsSun } from 'react-icons/bs';
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
          <CgMenuLeft />
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
        <button className="btn btn-ghost" onClick={toggleDarkMode}>
          {isDarkMode ? <BsSun /> : <BsMoonStars />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
