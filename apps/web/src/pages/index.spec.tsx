import React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import Index from './index';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: 'description',
      title: 'title',
    },
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Index', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Index />);
    expect(getByText(/title/gi)).toBeTruthy();
    expect(getByText(/description/gi)).toBeTruthy();
  });
});
