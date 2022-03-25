import { render } from '@testing-library/react';

import Prose from './prose';

describe('Prose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Prose>
        <p>Hello World</p>
      </Prose>
    );
    expect(baseElement).toBeTruthy();
  });
});
