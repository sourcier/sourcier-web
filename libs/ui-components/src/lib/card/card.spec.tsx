import { IGatsbyImageData } from 'gatsby-plugin-image';
import renderer from 'react-test-renderer';

import Card from './card';
import { href, title, alt, copy } from './card.mock';

describe('Card', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Card
          href={href}
          title={title}
          copy={copy}
          image={{} as IGatsbyImageData}
          alt={alt}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
