import React from 'react';
import renderer from 'react-test-renderer';
import * as Gatsby from 'gatsby';
import { Provider } from 'react-redux';

import ContactPage from './contact';
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

describe('ContactPage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ContactPage location={{ pathname: '/contact' }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
