import renderer from 'react-test-renderer';

import Navbar from './navbar';
import { brand, nav } from './navbar.mock';

describe('Header', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Navbar nav={nav} brand={brand} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
