import renderer from 'react-test-renderer';

import Card from './card';
import { href, heading, copy } from './card.mock';

describe('Card', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(<Card href={href} heading={heading} copy={copy} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
