import renderer from 'react-test-renderer';

import HeroWithImage from './hero-with-image';
import { imageUrl, imageAlt, heading, copy } from './hero-with-image.mock';

describe('HeroWithImage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <HeroWithImage
          copy={copy}
          heading={heading}
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
