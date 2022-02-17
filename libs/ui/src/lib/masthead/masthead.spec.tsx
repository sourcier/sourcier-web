import { render } from '@testing-library/react';

import Masthead from './masthead';
import navigation from './masthead.mock';

describe('Masthead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Masthead navigation={navigation} />);
    expect(baseElement).toBeTruthy();
  });
});
