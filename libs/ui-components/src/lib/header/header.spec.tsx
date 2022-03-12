import renderer from 'react-test-renderer';

import Header from './header';
import { brand, nav } from './header.mock';

describe('Header', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Header nav={nav} brand={brand} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
