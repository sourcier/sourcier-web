const React = require('react');
const gatsbyPluginImage = jest.requireActual('gatsby-plugin-image');

const mockImage = ({ imgClassName, ...props }) =>
  React.createElement('img', {
    ...props,
    className: imgClassName,
  });

module.exports = {
  ...gatsbyPluginImage,
  GatsbyImage: jest.fn().mockImplementation(mockImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
};
