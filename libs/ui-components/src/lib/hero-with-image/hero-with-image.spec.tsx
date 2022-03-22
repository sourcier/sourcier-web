import { render } from '@testing-library/react';

import HeroWithImage from './hero-with-image';

describe('HeroWithImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroWithImage />);
    expect(baseElement).toBeTruthy();
  });
});
