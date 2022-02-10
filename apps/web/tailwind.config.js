const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require(join(__dirname, '../../tailwind.preset.js'))],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
