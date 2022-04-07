import React from 'react';
import renderer from 'react-test-renderer';
import * as Gatsby from 'gatsby';
import { Provider } from 'react-redux';

import BlogListPage from './blog-page';
import { store } from '../store/store';
import { mdx } from './blog-page.mock';

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

jest.mock('gatsby-plugin-mdx', () => {
  return {
    MDXRenderer: ({ children }) => {
      return <div>{children}</div>;
    },
  };
});

jest.mock('@reach/router', () => ({
  useLocation: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('BlogListPage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BlogListPage
            location={{ pathname: '/blog/initial-blog-post' }}
            data={{ mdx }}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
