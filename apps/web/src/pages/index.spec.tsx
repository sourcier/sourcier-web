import React from 'react';
import renderer from 'react-test-renderer';
import * as Gatsby from 'gatsby';
import { Provider } from 'react-redux';

import Index from './index';
import { store } from '../store/store';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'title',
      nav: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Index', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Index />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
