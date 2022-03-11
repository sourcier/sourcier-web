import { render } from '@testing-library/react';

import { navigation, copy, licence } from './footer.mock';
import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Footer navigation={navigation} copy={copy} licence={licence} />
    );
    expect(baseElement).toBeTruthy();
  });
});
