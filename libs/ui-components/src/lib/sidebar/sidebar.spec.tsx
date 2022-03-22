import { render } from '@testing-library/react';

import Sidebar from './sidebar';
import { brand, nav } from './sidebar.mock';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sidebar brand={brand} nav={nav} />);
    expect(baseElement).toBeTruthy();
  });
});
