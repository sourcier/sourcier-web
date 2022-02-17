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
  background?: boolean;
}

export const Icon: FC<IconProps> = ({ name, background = true }) => {
  const defaultProps = {
    className: 'w-8 h-8',
    'aria-hidden': true,
  };

  return (
    <div
      className={clsx([
        'flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md',
        { 'bg-blue-500 text-white': background },
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
