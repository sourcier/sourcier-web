import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import './layout.scss';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
