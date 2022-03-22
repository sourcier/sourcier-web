import renderer from 'react-test-renderer';

import HeroImageOverlay from './hero-image-overlay';
import { imageUrl, heading, copy } from './hero-image-overlay.mock';

describe('HeroImageOverlay', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <HeroImageOverlay copy={copy} heading={heading} imageUrl={imageUrl} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
