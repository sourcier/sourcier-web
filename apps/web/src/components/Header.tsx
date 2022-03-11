import { Link } from 'gatsby';

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/" className="md:col-span-3">
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);
