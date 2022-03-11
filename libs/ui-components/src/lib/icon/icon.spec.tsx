import { render } from '@testing-library/react';

import Icon from './icon';

describe('Link', () => {
  it('should render link successfully', () => {
    const { baseElement } = render(<Icon name="link" />);
    expect(baseElement).toBeTruthy();
  });
  it('should render external-link successfully', () => {
    const { baseElement } = render(<Icon name="external-link" />);
    expect(baseElement).toBeTruthy();
  });
});
