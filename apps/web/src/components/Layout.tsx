import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="grid max-w-3xl grid-cols-1 m-4 md:mx-auto md:grid-cols-3 md:gap-3">
      <Header siteTitle={title} siteDescription={description} />
      {children && children}
    </div>
  );
};
