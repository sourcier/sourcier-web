import renderer from 'react-test-renderer';

import Hero from './hero';
import { heading, copy } from './hero.mock';

describe('Hero', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(<Hero copy={copy} heading={heading} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
