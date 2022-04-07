import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import * as Gatsby from 'gatsby';

import ContentPage from './content-page';
import { store } from '../store/store';
import { data } from './content-page.mock';

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

describe('ContactPage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ContentPage location={{ pathname: '/contact' }} data={data} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
