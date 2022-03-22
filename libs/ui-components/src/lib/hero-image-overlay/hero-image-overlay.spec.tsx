import { render } from '@testing-library/react';

import HeroImageOverlay from './hero-image-overlay';

describe('HeroImageOverlay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroImageOverlay />);
    expect(baseElement).toBeTruthy();
  });
});
