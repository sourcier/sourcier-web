import { FC } from 'react';

export interface FooterProps {
  navigation: { prefix: string; name: string; href: string; title: string }[];
  copy: string;
  licence: string;
}

export const Footer: FC<FooterProps> = ({ navigation, licence, copy }) => {
  return (
    <footer className="bg-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-x-6 md:order-2">
          {navigation.map(({ prefix, name, href, title }) => (
            <p className="text-base text-right text-gray-400">
              {prefix}{' '}
              <a href={href} className="text-blue-500" title={title}>
                {name}
              </a>
            </p>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-left text-gray-400">{copy}</p>
          <p className="text-base text-left text-gray-400">{licence}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
