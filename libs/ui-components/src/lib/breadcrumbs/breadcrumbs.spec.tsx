import renderer from 'react-test-renderer';

import Breadcrumbs from './breadcrumbs';
import { path } from './breadcrumbs.mock';

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Breadcrumbs path={path} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
