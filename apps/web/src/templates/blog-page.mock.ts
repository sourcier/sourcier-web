export const mdx = {
  frontmatter: {
    title: '🚀 Initial Blog Post',
    description:
      "Roger Raajaratnam's initial blog post outlining goals for the website",
    date: 'March 30, 2022',
    hero_image_alt: 'Red and white OPEN led lights',
    hero_image_credit_link: 'https://unsplash.com/photos/trbb1NeU4Jg',
    hero_image_credit_text: 'Kirill Sharkovski',
    hero_image: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          backgroundColor: '#080828',
          images: {
            fallback: {
              src: '/static/5d14b49519ecb02582700de05c9dc1e6/2d418/kirill-sharkovski-trbb1NeU4Jg-unsplash.jpg',
              srcSet:
                '/static/5d14b49519ecb02582700de05c9dc1e6/be79d/kirill-sharkovski-trbb1NeU4Jg-unsplash.jpg 600w,\n/static/5d14b49519ecb02582700de05c9dc1e6/784ed/kirill-sharkovski-trbb1NeU4Jg-unsplash.jpg 1200w,\n/static/5d14b49519ecb02582700de05c9dc1e6/2d418/kirill-sharkovski-trbb1NeU4Jg-unsplash.jpg 2400w',
              sizes: '(min-width: 2400px) 2400px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/5d14b49519ecb02582700de05c9dc1e6/9a858/kirill-sharkovski-trbb1NeU4Jg-unsplash.webp 600w,\n/static/5d14b49519ecb02582700de05c9dc1e6/c3710/kirill-sharkovski-trbb1NeU4Jg-unsplash.webp 1200w,\n/static/5d14b49519ecb02582700de05c9dc1e6/39d9b/kirill-sharkovski-trbb1NeU4Jg-unsplash.webp 2400w',
                type: 'image/webp',
                sizes: '(min-width: 2400px) 2400px, 100vw',
              },
            ],
          },
          width: 2400,
          height: 1800,
        },
      },
    },
  },
  body: 'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "🚀 Initial Blog Post",\n  "description": "Roger Raajaratnam\'s initial blog post outlining goals for the website",\n  "date": "2022-03-30T00:00:00.000Z",\n  "hero_image": "./kirill-sharkovski-trbb1NeU4Jg-unsplash.jpg",\n  "hero_image_alt": "Red and white OPEN led lights",\n  "hero_image_credit_text": "Kirill Sharkovski",\n  "hero_image_credit_link": "https://unsplash.com/photos/trbb1NeU4Jg"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "This is the first of many blog posts to come. I have been a developer since way back in 2005. I am currently building ", mdx("strong", {\n    parentName: "p"\n  }, "React"), " and ", mdx("strong", {\n    parentName: "p"\n  }, "NodeJs"), " based applications and it\'s time for me to start my blog. If anyone learns something from this \\u2014 about software development, I\'ll consider it a huge success."), mdx("h2", null, "Goals"), mdx("h3", null, "Contribute to the Community"), mdx("p", null, "I\'d like to participate more in software development\\u2019s wide and wonderful community! I\'d like to have a more interesting and meaningful impact by sharing my knowledge and experience, and that\'s a big part of why I want to start writing."), mdx("h3", null, "Share My Experience"), mdx("p", null, "I am always learning and I\'ve learned so much in the last 17 years \\uD83D\\uDE31. How much of it do you think I\'ve written down? Not nearly enough!"), mdx("p", null, "I love teaching and talking about software development. I\'ve done a fair amount of both and I have found that it is a great way to solidify an understanding of a topic."), mdx("p", null, "By sharing the problems I have faced and their solutions as well as creating new projects and writing about the process. I hope to be helpful to other developers."));\n}\n;\nMDXContent.isMDXComponent = true;',
  excerpt:
    'This is the first of many blog posts to come. I have been a developer since way back in 2005. I am currently building  React  and  NodeJs…',
  timeToRead: 1,
};
