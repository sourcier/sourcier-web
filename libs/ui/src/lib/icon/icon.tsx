import { FC } from 'react';
import {
  LinkIcon,
  ExternalLinkIcon,
  ChipIcon,
  CodeIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';

export interface IconProps {
  name: 'link' | 'external-link' | 'chip' | 'code';
  size: 'sm' | 'md' | 'lg';
  background?: boolean;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 'md',
  background = true,
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
      {name === 'link' ? <LinkIcon {...defaultProps} /> : null}
      {name === 'external-link' ? <ExternalLinkIcon {...defaultProps} /> : null}
      {name === 'chip' ? <ChipIcon {...defaultProps} /> : null}
      {name === 'code' ? <CodeIcon {...defaultProps} /> : null}
    </div>
  );
};

export default Icon;
