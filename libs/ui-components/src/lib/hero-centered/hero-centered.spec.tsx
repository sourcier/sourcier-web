import renderer from 'react-test-renderer';

import HeroCentered from './hero-centered';
import { heading, copy } from './hero-centered.mock';

describe('Hero', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(<HeroCentered copy={copy} heading={heading} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
