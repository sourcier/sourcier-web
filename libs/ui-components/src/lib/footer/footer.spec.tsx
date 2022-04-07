import renderer from 'react-test-renderer';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
