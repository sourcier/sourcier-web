import { FC } from 'react';
import { LinkIcon, ExternalLinkIcon } from '@heroicons/react/outline';

export interface IconProps {
  name: 'link' | 'external-link';
}

export const Icon: FC<IconProps> = ({ name }) => {
  const defaultProps = {
    className: 'w-6 h-6',
    'aria-hidden': true,
  };

  return (
    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md">
      {name === 'link' ? <LinkIcon {...defaultProps} /> : null}
      {name === 'external-link' ? <ExternalLinkIcon {...defaultProps} /> : null}
    </div>
  );
};

export default Icon;
