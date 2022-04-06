export const data = {
  mdx: {
    frontmatter: {
      title: '🤙 say hey!',
      meta_title: 'Contact page',
      meta_description: 'Contact page',
    },
    body: 'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "🤙 say hey!",\n  "meta_title": "Contact page",\n  "meta_description": "Contact page",\n  "date": "2022-04-04T00:00:00.000Z"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "I enjoy connecting with others, drop me a message, let\'s talk!"), mdx("p", null, "Social media is great for informal chats.", mdx("br", null), "\\nEmail works best for in depth discussions."), mdx(VscMail, {\n    className: "inline-block mr-2",\n    mdxType: "VscMail"\n  }), mdx("a", {\n    href: "mailto:hello@sourcier.uk",\n    target: "_blank",\n    rel: "noopener noreferrer"\n  }, "hello@sourcer.uk"), mdx("br", null), mdx(VscTwitter, {\n    className: "inline-block mr-2",\n    mdxType: "VscTwitter"\n  }), mdx("a", {\n    href: "https://twitter.com/sourcier",\n    target: "_blank",\n    rel: "noopener noreferrer"\n  }, "@sourcier"));\n}\n;\nMDXContent.isMDXComponent = true;',
  },
};
