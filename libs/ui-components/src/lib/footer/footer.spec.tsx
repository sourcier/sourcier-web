import renderer from 'react-test-renderer';

import Footer from './footer';
import { copyright } from './footer.mock';

describe('Footer', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Footer copyright={copyright} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
