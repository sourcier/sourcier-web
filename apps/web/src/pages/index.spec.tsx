import React from 'react';
import renderer from 'react-test-renderer';
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
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
