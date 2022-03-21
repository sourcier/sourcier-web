import Link from 'gatsby-link';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FaArrowRight } from 'react-icons/fa';

export interface CardProps {
  href: string;
  title: string;
  copy: string;
  image: IGatsbyImageData;
  alt: string;
}

export function Card({ href, title, copy, alt, image }: CardProps) {
  return (
    <div className="max-w-sm mb-8 overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={href}>
        <GatsbyImage image={image} alt={alt} />
      </Link>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {copy}
        </p>
        <Link
          to={href}
          className="inline-flex items-center w-full px-3 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
