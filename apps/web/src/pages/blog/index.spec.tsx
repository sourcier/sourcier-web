import React from 'react';
import renderer from 'react-test-renderer';
import * as Gatsby from 'gatsby';
import { Provider } from 'react-redux';

import BlogHomePage from './index';
import { store } from '../../store/store';
import { allMdx } from './index.mock';

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

jest.mock('@reach/router', () => ({
  useLocation: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('BlogHomePage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BlogHomePage location={{ pathname: '/blog' }} data={{ allMdx }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
