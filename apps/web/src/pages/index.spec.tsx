import React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import Index from './index';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'title',
    },
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Index', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId('site-title').textContent).toEqual('title');
  });
});
