import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Provider } from 'react-redux';

import { store } from '../store/store';
import Code from './code';

const components = {
  pre: (props) => <Code {...props} />,
};

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </Provider>
  );
};
