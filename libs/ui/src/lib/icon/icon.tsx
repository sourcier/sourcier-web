import { FC } from 'react';
import clsx from 'clsx';
import {
  FaTwitter,
  FaGithub,
  FaLink,
  FaExternalLinkAlt,
  FaMicrochip,
  FaCode,
} from 'react-icons/fa';

export interface IconProps {
  name: 'link' | 'external-link' | 'chip' | 'code' | 'twitter' | 'github';
  size: 'sm' | 'md' | 'lg';
  background?: boolean;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 'md',
  background = false,
}) => {
  const defaultProps = {
    className: clsx({
      'w-4 h-4': size === 'sm',
      'w-6 h-6': size === 'md',
      'w-8 h-8': size === 'lg',
    }),
    'aria-hidden': true,
  };

  return (
    <div
      className={clsx([
        'flex items-center justify-center flex-shrink-0 rounded-md',
        {
          'bg-blue-500 text-white': background,
          'w-8 h-8': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-12 h-12': size === 'lg',
        },
      ])}
    >
      {name === 'link' ? <FaLink {...defaultProps} /> : null}
      {name === 'external-link' ? (
        <FaExternalLinkAlt {...defaultProps} />
      ) : null}
      {name === 'chip' ? <FaMicrochip {...defaultProps} /> : null}
      {name === 'code' ? <FaCode {...defaultProps} /> : null}
      {name === 'twitter' ? <FaTwitter {...defaultProps} /> : null}
      {name === 'github' ? <FaGithub {...defaultProps} /> : null}
    </div>
  );
};

export default Icon;
