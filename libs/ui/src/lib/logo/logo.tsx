import { FC } from 'react';
import Icon from '../icon/icon';

import logo from './logo.svg';

export const Logo: FC = () => {
  return (
    <div className="flex items-center">
      <Icon name="code" size="lg" background={false} />
      <span className="ml-2 -mt-1 text-2xl">Sourcier</span>
    </div>
  );
};

export default Logo;
