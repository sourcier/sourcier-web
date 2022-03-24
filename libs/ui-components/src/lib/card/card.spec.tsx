import renderer from 'react-test-renderer';

import Card from './card';
import { href, heading, copy, imgSrc, imgAlt } from './card.mock';

describe('Card', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Card
          href={href}
          heading={heading}
          copy={copy}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
