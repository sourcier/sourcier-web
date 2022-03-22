import renderer from 'react-test-renderer';

import HeroWithImageOverlay from './hero-with-image-overlay';
import { imageUrl, heading, copy } from './hero-with-image-overlay.mock';

describe('HeroImageOverlay', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <HeroWithImageOverlay
          copy={copy}
          heading={heading}
          imageUrl={imageUrl}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
